export const name="electric_bike";
export const id="dl_884e6b7d5e164c80bb48";
export const url=new URL("../icons/E/electric_bike.svg?v=6694773d87cedd82cdae53e59548b7867724709179fe08871100dde68a95ac1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
