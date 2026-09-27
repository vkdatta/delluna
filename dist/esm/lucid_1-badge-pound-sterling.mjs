export const name="lucid_1-badge-pound-sterling";
export const id="dl_5d9e5fa09f5f4306bb28";
export const url=new URL("../icons/lucid_1-badge-pound-sterling.svg?v=b14ca2f0e337cb074362c2e439db3dbdcc574591f8bbce0255185d56c5ddcf64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
