export const name="lucid_2-funnel";
export const id="dl_8cae1a06dbc942418bb9";
export const url=new URL("../icons/lucid_2-funnel.svg?v=414f78b80ec96b22aac535cf9a55fba0dff07e4e05336038b06138f19bbe59f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
