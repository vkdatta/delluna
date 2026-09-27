export const name="arrow_drop_down";
export const id="dl_bf1535db351225778125";
export const url=new URL("../icons/arrow_drop_down.svg?v=2522e324ea6533617c019e56812c45f85b6ea671fb805a065a56bf5af8a76b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
