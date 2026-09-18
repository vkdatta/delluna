export const name="deceased-fill";
export const id="dl_074581e112104dce8e5f";
export const url=new URL("../icons/deceased-fill.svg?v=77b55d91b661c4818a3c5cb2943bf4cd7bcef389be24d601a392c43f927efd4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
