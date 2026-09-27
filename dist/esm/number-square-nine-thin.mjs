export const name="number-square-nine-thin";
export const id="dl_0ed2ad49f2904ef09691";
export const url=new URL("../icons/number-square-nine-thin.svg?v=62877c0202cdab8f456ad248c1d5b4fcaaa96a7f99c8b58220c72a11d29298cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
