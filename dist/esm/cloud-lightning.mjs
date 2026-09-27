export const name="cloud-lightning";
export const id="dl_26558f792a70485f8c4d";
export const url=new URL("../icons/cloud-lightning.svg?v=bb21b85a4ece1ec71d8845b023028a6f4d61e32135c8bed177bd18eaf58d20a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
