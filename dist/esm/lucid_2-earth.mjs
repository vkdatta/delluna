export const name="lucid_2-earth";
export const id="dl_248341fc7dc640438aa4";
export const url=new URL("../icons/lucid_2-earth.svg?v=d5303b987fa8730bdfbdfd3bfddc473e67f8d6fb9f89d5a67ba4a72fffc433cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
