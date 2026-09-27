export const name="yin-yang-duotone";
export const id="dl_ebd77c566beba3896a90";
export const url=new URL("../icons/yin-yang-duotone.svg?v=1af383f24b46353a015e18f25bbe3ed6ba40abfe195ea7045bfd9be49199ba8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
