export const name="arrow-elbow-right-up-fill";
export const id="dl_2c02f21b9ca342e4a85c";
export const url=new URL("../icons/arrow-elbow-right-up-fill.svg?v=4d15d8fe74d01298322a45058ad52957fd0e8a952d9ca9c3d517b261947b22ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
