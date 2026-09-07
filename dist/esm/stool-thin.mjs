export const name="stool-thin";
export const id="dl_48c3afdd49c749edb8a2";
export const url=new URL("../icons/S/stool-thin.svg?v=32c1c6282510f6df88073e2336ed6e8249262041c832e8adcc16923f124d9528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
