export const name="drop-slash-duotone";
export const id="dl_41b49981ed6a4f31bbb2";
export const url=new URL("../icons/drop-slash-duotone.svg?v=49e583d40a844aa17d226e284986aa4fa72cd993c1586850e527e1e0288e33e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
