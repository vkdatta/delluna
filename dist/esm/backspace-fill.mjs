export const name="backspace-fill";
export const id="dl_15ac82caa97543d095bc";
export const url=new URL("../icons/backspace-fill.svg?v=d797d2aedf2eebd93ffc89961bb78da9661546f519c8fcc9bf1d1be66922a0ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
