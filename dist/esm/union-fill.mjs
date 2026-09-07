export const name="union-fill";
export const id="dl_a1367eed679b46c99c3c";
export const url=new URL("../icons/U/union-fill.svg?v=16543c225ce0c2d91a2647d173f15f9ba7e3e4d442f09ed95a79d101d1c8ef61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
