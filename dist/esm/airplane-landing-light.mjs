export const name="airplane-landing-light";
export const id="dl_d0cf9956702b4aa9a58d";
export const url=new URL("../icons/airplane-landing-light.svg?v=b24d726f7b486ed48546965e6026303744cd2e758621c4fa3f5e5fc6f671d4c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
