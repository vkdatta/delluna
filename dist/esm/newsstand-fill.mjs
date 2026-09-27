export const name="newsstand-fill";
export const id="dl_1304f3942b6920957ce1";
export const url=new URL("../icons/newsstand-fill.svg?v=274d44c62fd9ee21e72ebd59cd4a289fe1a199df11bb975f1b1be819b459a235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
