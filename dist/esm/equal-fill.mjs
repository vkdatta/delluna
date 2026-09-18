export const name="equal-fill";
export const id="dl_43869f021c9644068ef2";
export const url=new URL("../icons/equal-fill.svg?v=976a081cb59103c1832c93960221d4a864a05dc77d17c3f166e8ba3c7dc41ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
