export const name="playlist";
export const id="dl_b5118f218ce44d46a508";
export const url=new URL("../icons/playlist.svg?v=fc711b95835ee28f0fcd3654544c2898d8cafcaacbd13a50b1977ae657fdd578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
