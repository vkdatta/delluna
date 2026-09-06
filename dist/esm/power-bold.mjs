export const name="power-bold";
export const id="dl_0c6838c7db9f4581b077";
export const url=new URL("../icons/power-bold.svg?v=7abd3ef7de1a44aab43d98b395013ae91058a969bb6ced2a31642815ffa571b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
