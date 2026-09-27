export const name="lucid_3-plane-landing";
export const id="dl_3002827e51264fa384ac";
export const url=new URL("../icons/lucid_3-plane-landing.svg?v=7d06796876c52ccbdcc86b45d15dc0e47246cf7f1b6a16a253b410100e107f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
