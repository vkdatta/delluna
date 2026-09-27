export const name="football-light";
export const id="dl_cac9ea24158b40eeb2a0";
export const url=new URL("../icons/football-light.svg?v=981ef4b8f871964e8f8dd7ddb0ffb76c41b9c907c3813a538ba2b575d772446b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
