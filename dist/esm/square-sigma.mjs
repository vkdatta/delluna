export const name="square-sigma";
export const id="dl_f9903258a8ab439a9f5d";
export const url=new URL("../icons/square-sigma.svg?v=5ef7bfbbf7366c34377eb65df41842a8bb3a1817627400fbd938b4e4fe669f21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
