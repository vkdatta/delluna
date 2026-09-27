export const name="auto_awesome_mosaic";
export const id="dl_a5af9b6da19655478929";
export const url=new URL("../icons/auto_awesome_mosaic.svg?v=12bbb7736051e4936d092624050cd6178022a2cff3f3595fe81adaf294aa96d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
