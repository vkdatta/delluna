export const name="number-square-eight-light";
export const id="dl_56197a5b106b41e1a39f";
export const url=new URL("../icons/number-square-eight-light.svg?v=80a5c440ed5719b11d11d4d1b605b50902f1b3bfa3b2378ed3985562d2d37d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
