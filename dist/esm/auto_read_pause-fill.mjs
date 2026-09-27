export const name="auto_read_pause-fill";
export const id="dl_bb062459f6de0386d675";
export const url=new URL("../icons/auto_read_pause-fill.svg?v=a95c8a0ca23b72779dea819382b4dcf410b09e85e7e3e47f202f64011c903491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
