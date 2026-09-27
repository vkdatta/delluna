export const name="play-duotone";
export const id="dl_83fe6808ff3b46288dfd";
export const url=new URL("../icons/play-duotone.svg?v=0439ec8622938181bc3e9c49ec0044c39700b84a87172a7c2cc6fbb691dbc416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
