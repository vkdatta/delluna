export const name="playlist";
export const id="dl_b5118f218ce44d46a508";
export const url=new URL("../icons/playlist.svg?v=ab307dcbcee93ddfc7b4140d223ac8718582279ae7a65473a7ccae3e1cab70fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
