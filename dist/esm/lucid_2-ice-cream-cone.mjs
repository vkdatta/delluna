export const name="lucid_2-ice-cream-cone";
export const id="dl_fd42b980a99b4c4084ea";
export const url=new URL("../icons/lucid_2-ice-cream-cone.svg?v=1af773754641f57f14e270eb3c43300e459243f2cea210df63a5c57e3245e878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
