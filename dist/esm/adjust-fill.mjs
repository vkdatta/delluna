export const name="adjust-fill";
export const id="dl_d258038d9a0448548ea3";
export const url=new URL("../icons/A/adjust-fill.svg?v=151ca707acd7d2bad1de87b5ccb9e0fafe3af7fc21508e339fdb33d6185556da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
