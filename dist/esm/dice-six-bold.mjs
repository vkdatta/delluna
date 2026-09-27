export const name="dice-six-bold";
export const id="dl_ea2b0ab6afe8427c9d39";
export const url=new URL("../icons/dice-six-bold.svg?v=96bbe70b1027d9bc926c2794bdd825727a2d10dc88cbde184eb39b03354a5df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
