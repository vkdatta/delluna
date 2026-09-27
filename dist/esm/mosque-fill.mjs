export const name="mosque-fill";
export const id="dl_ba47ecd1d7d344879da6";
export const url=new URL("../icons/mosque-fill.svg?v=4082735ced26d5d73b9540e84b335eb23ab62b496933f9689c495e063154e79f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
