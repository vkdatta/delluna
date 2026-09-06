export const name="cloud-sun-fill";
export const id="dl_e612fb07d0424181a964";
export const url=new URL("../icons/cloud-sun-fill.svg?v=6d9f3caa7031ffb5847c358a6743fd7536f371ef0c4e40ef3bdcf3617d28255d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
