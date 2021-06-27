import React, { useState } from "react";
import "./posts.css";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareOutlinedIcon from "@material-ui/icons/ScreenShareOutlined";
import { Button } from "@material-ui/core";

const Posts = () => {
  const [liked, isLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const likeAction = () => {
    isLiked(!liked);
  };
  return (
    <div className="posts">
      <div className="header">
        <Avatar style={{ marginRight: "10px" }}>S</Avatar>
        <h5 className="user_name">Sourav Kumar</h5>
        <MoreHorizIcon style={{ cursor: "pointer" }} />
      </div>
      <div className="post_content">
        <p>
          happy BIrthdayhappy BIrthdayhappy BIrthdayhappy BIrthdayhappy BIrthday
          happy BIrthdayhappy BIrthdayhappy BIrthdayhappy BIrthdayhappy BIrthday
        </p>
      </div>
      <div className="post_asset">
        <img
          className="image"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8QEBAPDxAQDw8PDxAPDw8PDw8PFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi8vFx8zODMsNygtLisBCgoKDg0OFxAQGi0lICUtLy0wLSstLS0rKy0tKy0rLS0tKy0tLS0tKy8rKy8tLS0rKystLS0rLS0tLSstKystLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EAD4QAAICAQMCBAQCCAUCBwEAAAECABEDBBIhMUEFEyJRMmFxkUKBFCNSkqGxwdEGM2Jy8KLxU4KDhLLC4RX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAzEQACAQIEAwcFAAAHAQAAAAAAARECIQMSMUFRYfBxgZGhwdHhBBMisfEjM2KCkrLCFP/aAAwDAQACEQMRAD8A9kJYJWJYJ0HmoIhghERQwjCKI6xMsaGCGSMkghhgAIZIQIDBJDUMAFhkhgAskMkAJAYTBAQsBEeIYwBFjmLGIWSGCMmASSSRiJEMcxICFMQxzFaMkQxTGMUxiK5JJIyTQssErEsEg1DCIBCIhjCWCViOJLLHhgEIiAMkkMBkEghhgAIZIR2+RB+o9oDBJDUkAFkjQQAFQER4pgAsBjEQERiEMEYiCoxCSQyRiFkkkMZIDEMcxDAQpiNGMUxkimKYximMkrkkklCNAlglYjiZmowjiIJYIhkEcRQIwkjQ4lCa3EchxB1OQXai+oFkX0sDmusvE854YVxZMjMVRRr9QzsxCqA/6QAST89sxxcTJHN+h0YWHnb7Dua3XY8O3zCQXJChUd2NCzSqCeBL8ThgrKQysAykdCDyDOF4jq8WTU6I43GWsjK3lkOFtsZs10HoMv8AENacGiQJfmuBp8NdfMtlsfMBSR8wB3k/e/OpPRL2fXYV9n8E7y31Y1abxXHkfaofbvbEMlLsbIvVeti64NUfzF69TqFxY3yZDtRFLMaJ4+QHJPyE4GJBh2aEACsYKZRYH6SpBNCqNMUHX8YFTd4zqPM0ZcCizYbX9llyLuX8ipH5TKj6lxXm1Sb8Nu6195NK8BJ05d2l8mkeKLVnFn21e4Yw4r3pCSfyEuyeIYVVW3ghwSmwM5YDhiFUE8EgHjgmjON4rhRg365sOXCE8lV58xRjQ9BybYMODYjaPTDz9PkYU740ZwRTAumSyR2J2C5L+orTiz9NrqeO25X2KOfv15HWx+J4WIFshJAHm48uJWJ6AM4AJ+XWbL7fOeXyI14yuo84ajYmTAduUYWcWSFB4UciiPbnqDn8GysjtjICarGSGYk7dSAxUhnPLKxDbXPIPB54Z/8A1VUr8lPZz8f3+1I/p05yvry9f2eozarGhVXdEZvhDMFJ+8tqcJNLkd8py8ZNX+pxpYbydOotmPawDXcbjfczvtOjDxHW3w268zDEw1Sle4II0E1MxYpjmKYxMUiLGMhEYhCIIximMQshhkMZLFMrMsMQwJKzFMYxDGQKYpjmVmMQskkkZMmgR1iCWCQbDCMIqxhEMcRhFE53imbJ52mwoxRcvmtkZeGpAtAHsPUT+QmWJWqKXUzWih11QjrCcHCl5dXjB2ls+JNwu18wk2Pn6hM+HxF1zeUjZg5G/Guo9eLUJ8iQGHYWp4LCx75cOuzM2p1QGNcW7zFUhvND4ELKrUao/o7Wb/FVd5w42NTiJLS+/CH8M7cHBdDb5ecr2N2o8PyaZ9O41OfIGzqjo7WtbS3A/wDKRzfX5XGQFtR5mShh0QylbPByPmfk31+Hp8h7zNrNNmbBhyq2bNnV2yMB6wUXcrVjJ23R4C0b6ccQJrnx5MeQHPkx5SXVVxhiuRb3Cgotj5pb1V16AjjJ1LWlNJx7+xrTS4ipyxM/iOFxjB1ArFkOVSuEeZySXBO/vZPTrR7Td4lqFKqq2cepfzEIHCuqt5gPte1SPqZ0dPrvMxjKuRtpbZT406/MfQ+85GDwPIUx40z7fLzZjj3YyUQBKChODtKV1JPQg9iqk2vxbc29OLtDZVK3qUdTwV7I7jYMz5NyZVx41YoUOLeWqrbcW4Nk9j0mbV6YJqdMQXYv5u9mayzXjUH2HDVwO01ajNkxeWi7cj5GzOWYFFJHrIoXXWh1qu85ni+rzFU1A8lEwORtyFlJDFSCXAPsONvf5c7YmSmmN7Pfin2aRvwMaMzqlafB0tLhyOd4cJjyLYUIPNXtw3QfmCfpKfHPDMRwbgu1tMjviZfiCgWyE/iVhYIPvfUAyeE+KK6nYyZlXdxiDDIDe4im4bqT2IFdZp8Q1mMabJlJBxnG3I/Fu9IHPck1z3m2GsOql81/e6f0RX9ylrt67weGHcdx5b9Hwiyf9WQN/wBSibp5TB4jlxLp0yB9M+VWW6Ryyht5IsEA+o0CLNHj362fxgYsTnJT5kKqFXjzi1+WwocAgG6HZqB4Bj6fHphU1WevLSetns2PGwnMo6sEyaDLlJK5dm4Y0chQVKFjWxhZF9Twen3myddFaqUo56qHS4YsBjQGUSVmCOYhlImAGIY5ggSIYDCYDGJgMUxzEaMkqaIY7RDGZgMQxjFMYhJJJJRJoEsErWWCZmyGEcRBHEllocTl+IC9XpB/o1H8QJ0xOJ49q8eDUaZ8rbEOPULuN1ZCih8/VdfI+05/qV/hPu/7I3+n/wAxd/6ZXg1OJ8+NGyZXy4NxwLkCY0Y1S/ABuBIUWfl7887Si9HqxzYOb4hz6hqBzXf1Tp4NRj1DYm87HmbTuGx48OJ0yOapQ24khelngcfSsyYxiOr0zMrZXbGwUHly+1mKjqRbv9p5zpbacyuP+3tfCD0Vo1Ef35k6WPMETAPNfEXORRtVGBG4nncDXXr/AEm/w3TqjMEvbjbMpLNbPncguT7AAAD6zk6LFj12D08lMZbE7KwGPUeY9dfkSGHsxHebv8P5zkJanW1K5g6sAM2Ngo5PBaiQa/YmuAmnROlu5pL44bva+WLpVGvXz0y3wnr/AO41J/6R/eZdJqRiwHNeNFTK1+YWVadVH4Qf5S/wLKrEAEE79SSAbIoIDftyag8CdTS2DtzakEcGtqhTY+oIhDaXb5/iN2b7Pcz6bxNdVnxFcmEjEuUlUORmYsvFEqAKo/Xn2nQ0WYZChqv1pSu1jTV/9Zm8UZU1ONyVBGnzGyQDQVv6kfeV+EZCPMAFti1LnZagna2TGeprpUVTdOL+T3/8p+kAknRKXV0W+OeHoqtqcdYsqbfMdKXzMVjcHrqQDYPUEDsTKNRpfNbFuO3Au3W51Hw8oePoSrcf6ies1eIIdQhXKfJw7gXAYM+SjYUbenY8c3X5jLkfYSuJsjZCreXjcKcOIcY/V/6fT3uXi5aqpp/uq01i+6vqrInDVSpirrryMebGdX52DUfqXw5C6MBTIvBBuzZAZDfuDxxNunxBSygY82TG6JgyEKR6uRZ9l2k0PahMK5zizLmy4M4LgYC75QwINkCqFn4q+ss/w0VrGFII/SHqiPwjUH+omSSzpLd6vXly7OxGm07eR29PhCLtssSSzu3xO56sf7dhQjmPAZ6iSShHA225YkhkhMYhDFjmIYyGAxY0BghCGKYximUSyGIYximMkqaI0dpWYzMBlZlhlZlCBJBJGQaBLBKhLFmZumWCOIgjCItDiFkB6gHvyAeYBHEgpBRQvAAA+QqVanEu3I+1d/lOu+hu20TV9avtLl7D3IA+sGZSRlSqKobvi7sUPfpJbS1KhsfH0H+0GPM+LUL6EPDFRSngtSKzEDuAGHPSXafKMm7YD6WKGwV9QNcX1F9xxJpqWVGtdFWZ23ewMOnRCxREQudzlVCl292rqZMOlxozuiIr5CDkZVAZyOm4jrLMbBiwBBKVuWxYvnpKsrMy+lHcNx6WUeju130jmkVKqenUc+uUjZNNjZkZkRmS9jMoZkvrtJ6XQ+0waz/D+mzZGyOr7motty5UVmAqyFIF0AL+Ql48Uw+qmLgJkceWpcfq/jFjuPbr95foNXj1ClsDLlVWKOUZT5eQVaMOoPMdVCalq3XcVTnjNTpoU4PCdOiMgxgq6lG3lshZDwVLOSa+Ufw7SJhVseNdqqwA5ZjQRTyzEk/EZbi1eNjtDqW2l9hNZCqsFYhDyaJAPHcQ4XBJrm3taBtvQnIrr9ZOSmmIQlVVVS76+d47xdbo0zY2x5BuRquiQQQQQQRyCCAQflE0fh+DDZx4kRmoM9bsj/7nNsfzPeavKJK+k/KyF+XQkXAZUUtyDbSgkBhgMZAshkMBjABiGMYpjIYIDCYpjEKYDITFMZJDEMYxDGSI0raM0VozMUyto5lbSiWJJDckZJoEsWViWLMzZDgxxKxHBiLRYJYsqEsWQWjyg8ZZdS6ORmRHfYjE413qXPYEkgIRX0u7mrwn/F65Xd8i5Vc4LbBv341dQSdh6BuLN88TjaPNpmzZcxRBjbLlK5QrANkZvSGU89D1PF1wO2FsIfVKjOcSYdzsQPRtIKsg7E7gxJroT3ElqaojRO99fnT4mOxVZkk3Ftt4WnjE9rSu7+m0vi2TfeQVlYpstdww6cKHul4BZQD7crxxU7mPxrFktsYfIqUCyj1eYSLr3BBPNdvt47Va/G+PEoHGdEAzbStLbCiRyDQQdOrHsTL1zLix6h7faQMOLyiptVNKSBW7dtfn+kwSpc3h9vx7xc6slGSl1ON73m93px0S0hrgei0mrJy7sNIDTbVRy7ZKTfuY9GAY8ewjZMTJqFONSuLI9PiQbti9LA/DuIvoK5H08Z/h/NkfLjwuhBbCcnOxGbItqdg3WBuPSrO32Av1GqyOqDayBd+PHjeyrFTa0CRt2miNzECwPcTTEqeG5qVmpvfeIfhNPJePH9DXTizW6H+NtOMpSk3Lhy9ZaVnlR2tYq4cbsUxs1XsZfTu+Gie5IJodLMfS6LHgx+WcGFEyeYcqqqbBuvg7VAIJY2T7mZsjO2F+VybsYyF+NpcMPqKO5vzBBlmj8Tt/Jyd1BDUOG27itAUAAD1roRMptLd+uu+x0rCeV4iiF/yl98cFGsze7HT9GwYl3oMaBMWFMu3eyM7NWPuQAaFXXNSltDjXNnzg2rnClUCp9O21I/DZ3Gbs+lw5lyq6JlUn4clFA63Tj589b7E95qwU3fcGX4ro5BVA2Pz5+cSrqVUrjfmnaJjvtfxUrGpoxaP9V3L0nZ876p2nYw6dXy5crO1YcZQY2VtoakVmsX0s/TpNW9WfNj3KXx7SFDeoAqPisADkk0CeK6XUZ9JaOvJLBiHNL66odOvP3uIdOAzuoTHkKIuTIAo8wjoOSTQ9vn3k0VNVun3/AJw04viGRKly3vutXe9tFortqEtFeqKYqk1z1+UYzsOEWAwmAxiAYkYxDGJkMUwmKYyRTFMJimUQyGIYxiGBIjSsx2iGUiBCYrGQxGlEMkkW5IxGoGOJVHBmRsi4GEGIDGECi1TLVMoUyxwSrBTTFSFPs1cGQzRHzDwrUeSScmQhBlU83tKdeoBHBYg9AB1nY1ORQQuFTzkxnIyi8gUBm2WQQLAH5bph8L8COHL+sDmlcKlBkG1rot05LEjp046mdLw5d+QM4K7juxgX8aCixf32kCvkYJ0Zm77+O3dC/R21Uuc9NKdNrJzCa0mzbUcG7Xepi12MNlRDYwYsebU58zKfTiY7mUV1Zdgq7PqHQmdvwbK+dSaxJjYLk9LbnxgEKMRPTjb2A4XmyedGrxKrBkHoJQZ8apuLMB6QAoJAshuw9Nx9AGJCoFGI6kYWXafNLbz6wRxsFVVdAPyzVCUxE9K/P1gv6TPiRltll32SvabTPK8abro6fSpgC7UGQvkbqoVWdhRJ5FAil/LpyZpyorHOmfT+k8qGp7UCuFHw1fuPeUafw0+acr5CfTtRQSUQKeB8zd2RXT850dVhOZacmidvpIDfEKJ/KZUUqEm49uPTJpxcTLVC2tLi+q5Kbarm4cHH8DxarHmON8K48eMHGhxsdriyVeuvQ1Vdj72RpXxK2q1Ceg5snl5Gf14UKrRY82BtHUDqoNUZ6FAuTGRz8Js0d1UQK73xMGHwrCu6xkZNQSGxZAgxjd1tdoYcA9T3jd28/Dxvv1D4HSsdT+VnG291U54/N+Js0oXJjDApkDLtXItsHQhQaroDtgx4vUFxKyp5Ypr4VWscD36nn26SzR6JdPj4G1cSOExqduPk305o33+Zm3Cj0CSAxNtYv03yBRH0uCtPP5Maq265pcJaaaenNLl2GfBiGIgXkPRS9g+1fequTOhZCRk3A5N6Ma3Kgs7R8weBNOF68wmuGJsA/COOfnwZQM6ZMmXFsJ8oIx3L6XXIpIKe/wCIH5ybzLnrr0Esz00S08F4X7dLmN+p5v5+/wA4Ga5LiGdJxyGAwxTATFMUwmKZSIIYhjGVkxiIYCZCYpMZApMUmMTKyYyWK0QmMTKyY0SwGIxjGVtKRDBcMSSMk1COsrBjAzM2LQYwMrEcGIotUyx32qx4NAmiaHA9+0oWWMgdSrC1YEEe4kstHkn87JmYlm2l2JUf5YQ9ArVy1c3f9J18Qqh9ep7nnvM+NiGyJztD+m/aun5czRi6zmqd9DqxsTPlUJQkrb83zNOiCuWsVe6j05X3+00YfD0GTzONwXaLvv1PA68DmJjFkV1Jv6maMmqIy40GMsXYcAUAo5difbkD6n7NKXYdKVTsutf2WazTq6Nj9RTJ1B+4+0zabU59JxkBz4OPWP8AMxD5gfEP48d52say1cIMuivKo1XD24E4mFmaqpcVLdfprRrpND6HIrgOhvGygrQAU3zY73LM+IOKpDypIdd4oEE8WOfY9uvMmHGFFKAo54Aoc8niWY0F3Qv3rmTo7GymL68uPXTAMANhiGUkFVqqr+fMvAkETy7IbowUjrwbrr9hFyBqCZ0Oxgponofiq/kZn1GRcS3V8qh63XuW6ma8ZNDdW6hu2kkX3q+0q1fwP9IQpKVWXVSceuvyguC5DNjjkNGr7XXXvFcjtBFMBMBMhMBMUmUSBjEJhJimMlkJiEwkxSYyGAmITCYhMZIGiEwsYplIhgJlTR4pjJYkkEkYjUIRK/NQfiH8f7SHU4x+MfZv7TM1lF4jiZBrMX7Y+zf2jDXYv2x9m/tAaaNfPar46/XmXqZz18Qw/tj7N/aWr4hh/wDEH2b+0UMtVLicx/jf/e/8zNGBZiyZQcuQg2C7EfmbmvAZyNQy6WdHAp3KR2II+omx15mPCJqs17/WCOml2Oli6TTjEy4W6DpNiRmo4jpKHQEUeRVUehl6CgB7cQAtEYSsRxAYm1t17vTVFaHX3B/526d01n+W/wBDL5RrASjAe39Y1qKrRnDhYcA8c/OO2Fz2/iIvkP7e3cc9f+fnNZOUQysmPqT5SO7AUqknkfwkx4mYBl5BAI5EYfbqy5otMFZiEy86Vz+H+IinSv7fxEcozhmcmAmXjQtZIUWepG2z9ZP0PJ7fxEcoTpfAykxDNZ0WT2H3EU6HJ+z/ABEcoh0vgZDFM2HQ5PYfcRT4fl9h+8I1UhZauBiaI02nw7L+yP3hFPhuX9kfvCPMuJDoq4MwmBptPhmb9kfvCKfC837I/eEM1PEWSrgzBJNv/wDKzfsj95YZWZcRfbq4MR/DTM2Xw2u4H1BnptkhQTHOzo+yjxeh0hzIW2lWDOrKQQFAND1H4r+Usbwh+evyFCgPr1JnrtghGMDsCPbtHViy7IPsJnh83huajQINdauj9JmyYtQpVfLZiz7F2hiel2QB9ftPoIxj27iK5xFyloHK7wm5d4W6LBfa+OkX3AWDStT51gy5fOOI4su88AeW1MQOQP7GbvCvFVyNt6dasgEgGjxdjn3nssvhiO6OWcFGLLtKjkiutX/GTL4Rpn+LT4TfNnGhs9ybHWQ8rk1eElRTld7za3KPXmYNPkE2do6+DaVeUwY1/wBlp/8AGO/hWML6S6kVZbNncbe4AL8fWZNGlE6PryNiU4BH/aX4n7H79pXpEG0hLIa2u6oH2rp8pW+jV/iOQgbSKyFeQQRfvyI0bVOO03VLFMxY8RDFrPIqt7Hue3br/wAqWNjsVve/fc1/zgJM2iOJhGVSWALErVi2HJFgc8Q0COR9QeaPfrEVMF2fW48a7mYEFggrm2PFSnX6hwn6vGcpJHdQKJ5PJ7dYuo02NwAyggEMByAD7ipM2NXG1gCB2PT2hbr+irvhxS/yvf2s/Ol9gralVIUkliAdoG737zOdWxYBMdi6JZ6rp9fnLP0PCDYxY+RTehbYfM943kpYO1bBsGhf3gkkKqHu14eu39CGRtyggleGAKkr9R2gRdooktXciuPr0hdA1ckUb9JK2fy6iZMulY99437hvXGQgA+HpdGvmZQqaaXepx12hzZNis67mPNbNzY7Pcjn5/L+UuBAVeaDn08AHcbJ4+/WTya5UKpv2NV34+pP3nO8Yw6jb5mmGN8yLWLHk9GK7HJrpQ3duenElTLb/fuoV+b48inFS18bx2nSylD6CeWVuLIJAoNz26j7yY8aoAAKA45JP8Tcp0enKEuSbcKWUliFI61Zv/tL35HF82PY19CJfXeZtNT112gXIpsBgSOvqU19ahYHp0/nFZthCqGO7jhR5a0CbPsOK/OWVB6idNhMeRSSAysQaIVgSp+fMUuobaWXc3IUkbqF9B1P/wCRlxKCSFUE9SAATD5a3uobqoGhdfWDgdp/nt7ABvp/Iyt8oWtwNk1Sgv2vsP8AnEvkAiFbgJUlRzJABKkjVJADNBJJLIBIZJIgJGK96/OSSAC4gw3bmDW520u3aPbrz9Y4kkjHMjgwiSSQMYGMDJJAoIMIMkkQw3DckkQyEwEySRgyGC5JIySQGSSAAkkkgIkMkkAJJJJACQySQAMkEkAIZJJIDJJJJAD/2Q=="
          alt="post_asset"
        />
      </div>
      <div className="likes_comments">
        <div className="likes">
          <ThumbUpAltIcon
            style={{ color: "blue", cursor: "pointer", marginRight: "5px" }}
          />
          <p> 1like </p>
        </div>
        <div>
          <p>Comments</p>
        </div>
      </div>
      <div className="post_actions">
        {liked ? (
          <div
            style={{
              color: "blue",
              cursor: "pointer",
              marginRight: "5px",
              display: "flex",
            }}
            onClick={likeAction}
          >
            <ThumbUpAltIcon />
            <p>Like</p>
          </div>
        ) : (
          <div
            style={{
              color: "gray",
              cursor: "pointer",
              marginRight: "5px",
              display: "flex",
            }}
            onClick={likeAction}
          >
            <ThumbUpAltIcon />
            <p>Like</p>
          </div>
        )}
        <div
          style={{
            color: "gray",
            cursor: "pointer",
            marginRight: "5px",
            display: "flex",
          }}
          onClick={() => setShowComments(!showComments)}
        >
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div
          style={{
            color: "gray",
            cursor: "pointer",
            marginRight: "5px",
            display: "flex",
          }}
        >
          <ScreenShareOutlinedIcon />
          <p>Share</p>
        </div>
      </div>
      {showComments && (
        <div className="post_comments">
          <Avatar style={{ marginRight: "10px" }}>S</Avatar>
          <textarea
            rows={2}
            className="comment_input"
            placeholder="Write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            color="secondary"
            variant="contained"
            disabled={comment === ""}
          >
            Post
          </Button>
        </div>
      )}
    </div>
  );
};

export default Posts;
