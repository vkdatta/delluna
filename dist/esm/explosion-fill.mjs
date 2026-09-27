export const name="explosion-fill";
export const id="dl_51a5038ce05693a052d4";
export const url=new URL("../icons/explosion-fill.svg?v=47899f87e6b106f4a1a1770dce525c397487f49aeb9fcb39efb44467bcea03bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
