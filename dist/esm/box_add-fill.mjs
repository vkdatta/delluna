export const name="box_add-fill";
export const id="dl_1739ae24a5134f23966f";
export const url=new URL("../icons/B/box_add-fill.svg?v=a97fb0e547beec2b5edb2d858457b3d66b552310bd279bb582d045c4b22e20a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
