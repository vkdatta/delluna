export const name="circles-three-plus";
export const id="dl_5d370a495ced4d459a18";
export const url=new URL("../icons/circles-three-plus.svg?v=06651a9515a779b468632267100d1dd2cd80f8b8c43ddb5b9430223261cc2138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
