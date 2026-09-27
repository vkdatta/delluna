export const name="dots-three-vertical-light";
export const id="dl_d6aa82b1fd5645739e8c";
export const url=new URL("../icons/dots-three-vertical-light.svg?v=5090ba348731831477189a442f2914a74e24149b3b56a20624ff2d63ad47237d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
