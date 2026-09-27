export const name="mountain_steam-fill";
export const id="dl_c2cb53e74c3cd41d7a58";
export const url=new URL("../icons/mountain_steam-fill.svg?v=0e4f36b5b0103ddd31cf7e5cb5294589ffeef074696e07e105688cfad2ea1738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
