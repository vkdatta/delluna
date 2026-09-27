export const name="chromecast_2-fill";
export const id="dl_4610484c738874aecb34";
export const url=new URL("../icons/chromecast_2-fill.svg?v=f501224454e1b47d03d02fdcfd29f19e72c8d56f46730faa1475e30d03eab34e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
