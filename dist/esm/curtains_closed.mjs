export const name="curtains_closed";
export const id="dl_42b388d3b5181a9b088a";
export const url=new URL("../icons/curtains_closed.svg?v=d4aeec0b935e72489f5d948768e6aeaed0cafb6a5746515ffa7f74a5981b4718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
