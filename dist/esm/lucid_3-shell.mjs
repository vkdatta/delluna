export const name="lucid_3-shell";
export const id="dl_920e679e143945cb8aee";
export const url=new URL("../icons/lucid_3-shell.svg?v=243fe5c074d640cbc5920ab9d6457d792ef60763aacb870f8a6061e8dcc208ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
