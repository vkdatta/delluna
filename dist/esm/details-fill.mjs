export const name="details-fill";
export const id="dl_587031019b249a067458";
export const url=new URL("../icons/details-fill.svg?v=6a87b49b34a73f889245774c4ee92c21c01dfc9fe0b23ae538efe81cf6f6a3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
