export const name="format_quote_off";
export const id="dl_72b60f28a615c2ffc94f";
export const url=new URL("../icons/format_quote_off.svg?v=dfeef7618bc55bd3a60f741d12cbe0a9858c006b7ad99896c315ab9d21f0515b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
