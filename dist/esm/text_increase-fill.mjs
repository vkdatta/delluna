export const name="text_increase-fill";
export const id="dl_640b31705b5941c8be63";
export const url=new URL("../icons/text_increase-fill.svg?v=c1c7674c8a66faae0c0b5fd0273f8eea798a9cc6b7784767ed4f4e21b89a1d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
