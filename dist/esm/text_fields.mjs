export const name="text_fields";
export const id="dl_948b3b2c74c2ebf1f866";
export const url=new URL("../icons/text_fields.svg?v=3be2fbf141b546dedf366b87677e4478e7ab369197630f1d2a5f77ab2586b063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
