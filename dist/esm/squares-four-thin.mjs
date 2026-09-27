export const name="squares-four-thin";
export const id="dl_793b938756f7caf63b5d";
export const url=new URL("../icons/squares-four-thin.svg?v=40a241b5353010d8ee9f88a5becfbbe137b4f649ef93bbb9886f9f434cbd62c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
