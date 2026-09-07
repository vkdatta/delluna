export const name="truck-trailer-light";
export const id="dl_104de56f8b014daca295";
export const url=new URL("../icons/T/truck-trailer-light.svg?v=5a7245ce71d9b8f4294aa634f283b72529c2198ebe4695013297a239aeff2d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
