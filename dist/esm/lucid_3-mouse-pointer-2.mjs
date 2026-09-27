export const name="lucid_3-mouse-pointer-2";
export const id="dl_91e99d22e91c44979d04";
export const url=new URL("../icons/lucid_3-mouse-pointer-2.svg?v=7ebe493f41287d310118d846c372ebb53464ab616986db14ca13985acbf76bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
