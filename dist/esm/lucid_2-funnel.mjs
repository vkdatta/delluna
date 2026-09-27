export const name="lucid_2-funnel";
export const id="dl_8cae1a06dbc942418bb9";
export const url=new URL("../icons/lucid_2-funnel.svg?v=774557375982756649fce25a63b90e03d1e10dae45ab8316f6f46ec788c44c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
