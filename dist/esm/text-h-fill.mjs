export const name="text-h-fill";
export const id="dl_a885549977a748d586cb";
export const url=new URL("../icons/T/text-h-fill.svg?v=033dd48db74158cf0934396193e15818d3bbf49c4db47b870cd96a6dc89912d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
