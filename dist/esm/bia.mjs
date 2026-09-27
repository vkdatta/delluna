export const name="bia";
export const id="dl_8a1a24b46955abf4833a";
export const url=new URL("../icons/bia.svg?v=a449fee771261cf60cc2b3b410c2cd2e61d52beaa240aded66eac6150e52b726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
