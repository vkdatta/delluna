export const name="dots-three-outline-bold";
export const id="dl_1232a2295b534cdd9902";
export const url=new URL("../icons/dots-three-outline-bold.svg?v=b0acf0f26b7765fe17c474adb171bca64c1bc1598a09ab320f1246ee27c40001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
