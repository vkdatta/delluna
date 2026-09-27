export const name="t-shirt-bold";
export const id="dl_56296060c4b3e1d5fa0e";
export const url=new URL("../icons/t-shirt-bold.svg?v=4c724a0b49ab53e0b30ef8338dbc237f234704886fa10ad03670726d278c4a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
