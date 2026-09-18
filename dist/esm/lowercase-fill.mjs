export const name="lowercase-fill";
export const id="dl_05c40b45992445438651";
export const url=new URL("../icons/lowercase-fill.svg?v=50ac5537ea6c4a9b92dbe5158cab34451816207f33f5cb607547ed2eddda67a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
