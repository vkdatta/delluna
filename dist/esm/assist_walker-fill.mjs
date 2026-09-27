export const name="assist_walker-fill";
export const id="dl_137cb3213550d0b851ff";
export const url=new URL("../icons/assist_walker-fill.svg?v=396a5fb4f796db8acca394a0551d3d2a8ef25758e5b5c74afca2f4a885219176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
