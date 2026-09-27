export const name="dot-outline";
export const id="dl_a2f22a9e6f6c45ffbaee";
export const url=new URL("../icons/dot-outline.svg?v=ef0aa69acebf5066090c416c18b1e3841791ac5201cc01c6a6da2990de41a3dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
