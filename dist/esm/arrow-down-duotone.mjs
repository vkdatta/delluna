export const name="arrow-down-duotone";
export const id="dl_a97341655fa94f819f1d";
export const url=new URL("../icons/arrow-down-duotone.svg?v=eae9f3ef099975da4fd8e3d3a4447328d20d455fa278d761106b3302a2129088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
