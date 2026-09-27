export const name="print_disabled";
export const id="dl_003b369e16c6c54e5c4e";
export const url=new URL("../icons/print_disabled.svg?v=328fa04c5c81933c896d8593824263f6a8cfec7c0a94c0fc7d846bee792b733b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
