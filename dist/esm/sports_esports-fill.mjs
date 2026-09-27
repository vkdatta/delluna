export const name="sports_esports-fill";
export const id="dl_510fbf548bf1b271eb1b";
export const url=new URL("../icons/sports_esports-fill.svg?v=1c1b80cf82517a8975b936677139584da25240e9b655575d7b6ed008d330bf5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
