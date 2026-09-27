export const name="shield-slash-thin";
export const id="dl_a1ed7ab3c9940baca12d";
export const url=new URL("../icons/shield-slash-thin.svg?v=cd582c84f8a29d836e1a0117e11345a80febe497486d44feb36022e9a606b8e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
