export const name="music-note-simple-fill";
export const id="dl_54447d87b39d44c5b525";
export const url=new URL("../icons/music-note-simple-fill.svg?v=314e0d1869f6a42b7914a8f16b04be95878f8dfa8d38f52298dc4e06493c1621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
