export const name="escalator-down-fill";
export const id="dl_182845e62f284bcdb36f";
export const url=new URL("../icons/escalator-down-fill.svg?v=0c5008a04895aa2eee5f9c0017214ff8fc3417390a2e6c77b1c2c328be8d519b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
