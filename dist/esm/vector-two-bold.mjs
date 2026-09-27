export const name="vector-two-bold";
export const id="dl_6d3ff06b1a8d30ec7640";
export const url=new URL("../icons/vector-two-bold.svg?v=989852cab546a63b8706a3508d2d7266bc5608d9958daf42ec6f6d4fb79bc2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
