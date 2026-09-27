export const name="nest_true_radiant-fill";
export const id="dl_94c551100a06729d7b8b";
export const url=new URL("../icons/nest_true_radiant-fill.svg?v=1979762813b341cbbaa5479e9e55fffd4839d452d51554d8362a97e1d26a82db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
