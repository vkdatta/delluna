export const name="thumbnail_bar";
export const id="dl_fb7ac1616af4b2abe28b";
export const url=new URL("../icons/thumbnail_bar.svg?v=b0b680961f9be1f7ccc353405c5542418976cfed86c13ecca9eafe9bd14f9011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
