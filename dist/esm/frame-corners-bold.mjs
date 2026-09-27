export const name="frame-corners-bold";
export const id="dl_8598cf9544534529856b";
export const url=new URL("../icons/frame-corners-bold.svg?v=34e069b77ed3570d637ae21f83ddd3f7f4e6f92196099fd6f1841b348b01f779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
