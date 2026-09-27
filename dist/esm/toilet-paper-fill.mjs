export const name="toilet-paper-fill";
export const id="dl_aced6b6219f6d80f5887";
export const url=new URL("../icons/toilet-paper-fill.svg?v=6ec5bb03bd7d6f8bd46f38bc4e2edb91661b542ef73e78dca92cbea98d475134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
