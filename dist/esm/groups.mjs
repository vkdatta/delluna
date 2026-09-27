export const name="groups";
export const id="dl_a0dc645f3435b1cc3cc3";
export const url=new URL("../icons/groups.svg?v=b6f8ae7d23cbe493079f50ba0355c6608ca9e4a6d62057b7150da29911021b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
