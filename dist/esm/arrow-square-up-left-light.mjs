export const name="arrow-square-up-left-light";
export const id="dl_e3fb455ca8f5431bb6e7";
export const url=new URL("../icons/arrow-square-up-left-light.svg?v=bf023990fe85e63f9675b9a1dd27219911cf52d78b5e7c15e0eb630c9171fbd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
