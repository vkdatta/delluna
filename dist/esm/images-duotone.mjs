export const name="images-duotone";
export const id="dl_c2019d11c7ab429e9976";
export const url=new URL("../icons/images-duotone.svg?v=419a7c2fb538711a40ca61404700a0fedeb472373c394261f485bb5c471fd2d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
