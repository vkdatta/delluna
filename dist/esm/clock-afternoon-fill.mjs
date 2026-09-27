export const name="clock-afternoon-fill";
export const id="dl_1eebdb5161b845db8908";
export const url=new URL("../icons/clock-afternoon-fill.svg?v=2ce75643029b35fc40204b5525f0c012dae84b26ea3af2942ce7071bd25aed77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
