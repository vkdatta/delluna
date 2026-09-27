export const name="lucid_1-badge-pound-sterling";
export const id="dl_5d9e5fa09f5f4306bb28";
export const url=new URL("../icons/lucid_1-badge-pound-sterling.svg?v=027b652131a74f265102edd5c7a6d5c694f11ec2fdec015bfacd96a479983f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
