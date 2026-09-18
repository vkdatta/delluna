export const name="square_circle";
export const id="dl_fd2be9ae129c4d83bb3c";
export const url=new URL("../icons/square_circle.svg?v=5d590f785b7835ec7f373e2d904a141bf609dfb4280b4a10204904e2e0040f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
