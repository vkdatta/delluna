export const name="dots-three-bold";
export const id="dl_f122250fad4d46628159";
export const url=new URL("../icons/dots-three-bold.svg?v=e8414c8787a02f260f29e958c955d5283e0012ac68056712e315efb264b38101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
