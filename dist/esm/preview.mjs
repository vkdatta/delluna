export const name="preview";
export const id="dl_ac77f9e83894433f97d9";
export const url=new URL("../icons/P/preview.svg?v=ff7dc54e69d6fd441e9791fd7388d4040998cdb74be6ec99eee32653c0fcd58b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
