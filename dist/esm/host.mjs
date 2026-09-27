export const name="host";
export const id="dl_2e2e545f3ff7c573ffa7";
export const url=new URL("../icons/host.svg?v=5d03f8cde6b2e8a01bbec9d120313b56508de8b7682a22a8cc9e7b448d34a0b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
