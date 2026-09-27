export const name="push-pin-slash-fill";
export const id="dl_16524367ab0b4adcb781";
export const url=new URL("../icons/push-pin-slash-fill.svg?v=4f99cd99a394b3b87f1626a8e11f0ab63fca4bc514c0d51977e3874d60adf3ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
