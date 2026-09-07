export const name="pizza-light";
export const id="dl_14a5435102c04d9e9557";
export const url=new URL("../icons/pizza-light.svg?v=1a9e067c6ff08e072c8e33e12dc2dfb1416fa73964e85d861c76cc689db539e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
