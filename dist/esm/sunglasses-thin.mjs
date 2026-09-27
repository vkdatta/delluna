export const name="sunglasses-thin";
export const id="dl_4fb279c338d233ede54e";
export const url=new URL("../icons/sunglasses-thin.svg?v=557190640585731e4925b235a74907721a356c6cf4fa309b9c6830464973653b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
