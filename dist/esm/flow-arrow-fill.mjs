export const name="flow-arrow-fill";
export const id="dl_a5578449f113449e8b5b";
export const url=new URL("../icons/flow-arrow-fill.svg?v=322987a47d89e10509dd53a940b8ee0dff74a256db6fc9e59789fe0068c1e2a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
