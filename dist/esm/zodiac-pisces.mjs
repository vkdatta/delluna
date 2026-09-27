export const name="zodiac-pisces";
export const id="dl_ef15a704c0404ead857a";
export const url=new URL("../icons/zodiac-pisces.svg?v=2fa0d8ee7beea656ae046df70d83b59de996b1439a5e26651bb33f90012e988c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
