export const name="cloud-lightning";
export const id="dl_26558f792a70485f8c4d";
export const url=new URL("../icons/cloud-lightning.svg?v=4d36efc5272d967c1e66519daaf724fcead47c2760f7186165d92f1e185e67a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
