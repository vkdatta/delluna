export const name="playlist";
export const id="dl_b5118f218ce44d46a508";
export const url=new URL("../icons/playlist.svg?v=3c9572f1f09ce3bc66a927b0b043e6c86fbeba719f9fea2192602a1db24ad5fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
