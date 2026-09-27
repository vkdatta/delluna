export const name="belt-light";
export const id="dl_8a32ea3392d24887b7bc";
export const url=new URL("../icons/belt-light.svg?v=ab87ce46dc4d331af39bd680b00a71f9679fec5c423d2b64cfc69844de41a87c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
