export const name="currency-jpy-thin";
export const id="dl_f5076995362d46269401";
export const url=new URL("../icons/currency-jpy-thin.svg?v=cea3d510e2a7ee97005c785cff70e5f1ec34cb6c545fb6540cd209ed457a59d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
