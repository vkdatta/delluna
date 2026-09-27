export const name="lucid_1-clipboard-minus";
export const id="dl_070dfe107d71405a80f1";
export const url=new URL("../icons/lucid_1-clipboard-minus.svg?v=2c5ca6af750056097845e90e01be62b44460521758ebd3bb115c431d80bd213b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
