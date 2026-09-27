export const name="file-dashed-fill";
export const id="dl_952aa2d89d714442a474";
export const url=new URL("../icons/file-dashed-fill.svg?v=dae7f73546b87f08b8acadb7baa2b7c36aa6ad95a3771df76a84905f06251735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
