export const name="caret-double-down";
export const id="dl_b15f7467b5524a6cbec2";
export const url=new URL("../icons/caret-double-down.svg?v=08c4d32aff223f1ec4401c936a2e0c3e46047c8687bbbf538fc648fe33d6b9ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
