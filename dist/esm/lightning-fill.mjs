export const name="lightning-fill";
export const id="dl_436113205fa24ad4bd0d";
export const url=new URL("../icons/lightning-fill.svg?v=671cb3fe1a7f841e8b350392325f0c90982fe375b7eb8f51363223fbef0c31c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
