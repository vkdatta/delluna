export const name="arrow-line-up-right-fill";
export const id="dl_5dea0e8a7f0c471cbb75";
export const url=new URL("../icons/arrow-line-up-right-fill.svg?v=1c8c8aa4a863af432e55cc38a6f564c6cd44d5b71fe8864b8c8eca422331f5c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
