export const name="columns-bold";
export const id="dl_3bed56803bfa435a8cc9";
export const url=new URL("../icons/columns-bold.svg?v=3e2c6b7742933186e8b9cf871f6ade9b9fab0a59d51c0c79ad1a8c3e07cbbbaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
