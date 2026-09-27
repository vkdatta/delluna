export const name="caret-double-left-bold";
export const id="dl_940db14b3d3e437bba43";
export const url=new URL("../icons/caret-double-left-bold.svg?v=09d0e33be2f697541525462dfcc088fdd44b16cb35b55126efaaa69343205211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
