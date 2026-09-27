export const name="heart_check-fill";
export const id="dl_ae87a83c78868dfcbee4";
export const url=new URL("../icons/heart_check-fill.svg?v=de1b9550c4723485b70081bd1ae14b51e9aa086020ff52b9009b16685d54f952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
