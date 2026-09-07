export const name="tote-simple-bold";
export const id="dl_3c83990e63f845809a36";
export const url=new URL("../icons/T/tote-simple-bold.svg?v=9f5e2b5a327b33f12350a77a20189ad57d4b56b9e4065e00f214f27ff9fb987f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
