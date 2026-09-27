export const name="casino-fill";
export const id="dl_177b30e456cca2f21564";
export const url=new URL("../icons/casino-fill.svg?v=a294116b18c0a322734fdb3c16657512a353da185e0e21a8d94eb3a548143698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
