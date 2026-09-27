export const name="format_ink_highlighter";
export const id="dl_4c899f0556ec08a2874d";
export const url=new URL("../icons/format_ink_highlighter.svg?v=8d96c4a3d32e61a8fef6cf9f19242756b2df74e1366f33409276b6a378a3ff82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
