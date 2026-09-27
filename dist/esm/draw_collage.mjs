export const name="draw_collage";
export const id="dl_f84ac10bac80b6ceb85f";
export const url=new URL("../icons/draw_collage.svg?v=37c93036f14374b26d103f06272e4701692d47dfe090f82f1caa6f34bf6059a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
