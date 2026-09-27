export const name="cell-tower-duotone";
export const id="dl_de4a287bc9034807af25";
export const url=new URL("../icons/cell-tower-duotone.svg?v=cae58306f326f5b09b4dff09954ea6640a6fae26a50c68969fbdbad725fed0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
