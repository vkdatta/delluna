export const name="vinyl-record-bold";
export const id="dl_ccc0ae9be527d68f4c10";
export const url=new URL("../icons/vinyl-record-bold.svg?v=3f66309dfcc032634f32ba423fc274ab43599b0e559421d948d19e7ef26d90a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
