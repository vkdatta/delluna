export const name="chalet";
export const id="dl_258dcc8dcb4dbeceecba";
export const url=new URL("../icons/chalet.svg?v=280d00c22a457f765235d4022f3274da97078393542737ccbf68310524d137a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
