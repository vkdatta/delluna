export const name="sneaker-move-bold";
export const id="dl_fca7ff1542194922bc1d";
export const url=new URL("../icons/S/sneaker-move-bold.svg?v=8e7c1c5489cec17109ee8d367cf11ba862f5390ee6e6313c85243bcc3a6d6db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
