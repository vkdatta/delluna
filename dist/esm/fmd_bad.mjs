export const name="fmd_bad";
export const id="dl_372854d5c3a4cfccbe9c";
export const url=new URL("../icons/fmd_bad.svg?v=9aedd192fe016154c33bd490858843f62fd363ac6dbe26d090085d7252036f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
