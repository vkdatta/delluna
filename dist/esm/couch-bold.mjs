export const name="couch-bold";
export const id="dl_cc49c55d3cef4b0aa6da";
export const url=new URL("../icons/couch-bold.svg?v=6d1b2f66917278b45c1d4b1695a8a082897e260e37ab79ea42f4a82050d9c0af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
