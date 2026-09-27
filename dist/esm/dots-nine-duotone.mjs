export const name="dots-nine-duotone";
export const id="dl_06df531f554749598e52";
export const url=new URL("../icons/dots-nine-duotone.svg?v=bedf5101094b2504a6c34dfabd21b2ea1f09adf1a595ac24d6f07ac5f06277db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
