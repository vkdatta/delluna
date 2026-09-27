export const name="eye-fill";
export const id="dl_10ca408065a04ff3bd23";
export const url=new URL("../icons/eye-fill.svg?v=f5d65abd21b3638120152c4cd32b59ac310987ca793ebd1c8e89db5b10587df7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
