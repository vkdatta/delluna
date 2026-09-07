export const name="skull-fill";
export const id="dl_03003fb48715437e908d";
export const url=new URL("../icons/S/skull-fill.svg?v=1a1eab22a03268af2f34ab05aab19eee5b01e739e2df3fedca1ff683f3fcc3fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
