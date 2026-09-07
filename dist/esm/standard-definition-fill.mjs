export const name="standard-definition-fill";
export const id="dl_bbd20447e30740b1947f";
export const url=new URL("../icons/S/standard-definition-fill.svg?v=35cf7a994e54ac00a4c2dbc6d7f62e2e9bfe82595251cd39434346741250408a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
