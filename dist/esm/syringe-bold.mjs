export const name="syringe-bold";
export const id="dl_9d5b4d3dbfb2284e3306";
export const url=new URL("../icons/syringe-bold.svg?v=23e29540f34246ab2f230937bd309def3311b60b0b0060c8df6fda2db801ff23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
