export const name="bell-light";
export const id="dl_4dd3841f26ef47c3b442";
export const url=new URL("../icons/bell-light.svg?v=f75c226ae3ce1512f99a9d1f370c341c31ecd1a49047364a499a66c9cdc03109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
