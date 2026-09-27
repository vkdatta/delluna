export const name="relax";
export const id="dl_a4eaa30320af4aa03380";
export const url=new URL("../icons/relax.svg?v=de9d1897705b8c03586beebd32053636ee0c711af7200afcf0474165fa737f6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
