export const name="lucid_1-beer";
export const id="dl_0232d09c336b4e109320";
export const url=new URL("../icons/lucid_1-beer.svg?v=ace8599d3f38cd483b3ffed0cf827ffe33b48d223e310e7c5e2e7e48d96126a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
