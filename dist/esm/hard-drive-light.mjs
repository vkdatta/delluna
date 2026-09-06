export const name="hard-drive-light";
export const id="dl_01929401c26a47dd916e";
export const url=new URL("../icons/hard-drive-light.svg?v=f480a1324ae1d74c795ae936bfd0c073ea9fffc591b1e463e5bd19d29a53b2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
