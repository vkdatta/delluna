export const name="number-one-fill";
export const id="dl_08e506b8cd0042b087a0";
export const url=new URL("../icons/number-one-fill.svg?v=e976818a4a3533643c4245653c0b9844198e187a5ecc15b5a03985e3b39c9a87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
