export const name="gender-male-fill";
export const id="dl_a96cf08e41924b778d06";
export const url=new URL("../icons/gender-male-fill.svg?v=3353d4f83e19fb244acd027572ee6f6c6f4af126f048b1c7dc849064641d1e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
