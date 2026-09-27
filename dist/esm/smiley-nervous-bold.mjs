export const name="smiley-nervous-bold";
export const id="dl_deaa277a71299b0ddd8d";
export const url=new URL("../icons/smiley-nervous-bold.svg?v=76c3a32649a3651d7b7def3fa64bda17e34bd486597b8592b7adf7178731e2c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
