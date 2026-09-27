export const name="cursor-click-fill";
export const id="dl_e9a977c09d8e4ab09f08";
export const url=new URL("../icons/cursor-click-fill.svg?v=325319228ae621bc484f0497bc1b20c26eff7c3643a677ea6c9b1b3a1f372514",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
