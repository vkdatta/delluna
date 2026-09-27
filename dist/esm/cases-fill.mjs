export const name="cases-fill";
export const id="dl_a4b9a09f1a61048f5d56";
export const url=new URL("../icons/cases-fill.svg?v=4845ee0c0b754ab8bd8aad6127100d0cee8cf5e452e5b1004878b57817c7c9b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
