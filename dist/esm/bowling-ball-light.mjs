export const name="bowling-ball-light";
export const id="dl_160931d596e84f33a01f";
export const url=new URL("../icons/bowling-ball-light.svg?v=bcab2842cfa52f9e12885fb22ec823ee39003d3e1c08c7faedf9b9dedf61ed23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
