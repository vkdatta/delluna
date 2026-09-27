export const name="mood_bad-fill";
export const id="dl_9a742789bd134d6fc15a";
export const url=new URL("../icons/mood_bad-fill.svg?v=78b38d573cc281482825d52be54db176eb38f2ac260a76264cd656a978ab25c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
