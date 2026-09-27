export const name="text-t-fill";
export const id="dl_c938cdec3c2057926b60";
export const url=new URL("../icons/text-t-fill.svg?v=5ae62366cdf0520363a6316d1f649301ae8b640b1efb05f496f8ba5648d01bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
