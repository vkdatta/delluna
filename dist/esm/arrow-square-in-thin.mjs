export const name="arrow-square-in-thin";
export const id="dl_a220c071531941fbaefc";
export const url=new URL("../icons/arrow-square-in-thin.svg?v=62a865576761a8d18a5b661bff8ec939e6e40e203d0318c630c04619ba3af498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
