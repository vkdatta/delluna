export const name="album-fill";
export const id="dl_9e104a817031403a8199";
export const url=new URL("../icons/album-fill.svg?v=138d81447940b7c660f3fb33b752ad66ae68e4c541c9192ffa2a1eaca6343509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
