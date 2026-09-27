export const name="wheelchair-fill";
export const id="dl_d76b047d6e45d1efb71a";
export const url=new URL("../icons/wheelchair-fill.svg?v=8a7158679a966d54a3fca6ef6019b3f02290a4978424914a0fdbde5f41c5f199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
