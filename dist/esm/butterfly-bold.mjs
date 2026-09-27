export const name="butterfly-bold";
export const id="dl_a082f220f83c4f5b914f";
export const url=new URL("../icons/butterfly-bold.svg?v=c9d3584ee2f5d2c6b09f06ffce843ff7eb25da9a81e0a07e3a4ab9474227c235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
