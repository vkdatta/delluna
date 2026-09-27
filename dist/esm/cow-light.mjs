export const name="cow-light";
export const id="dl_564c3a2ef0d04639946c";
export const url=new URL("../icons/cow-light.svg?v=399185bc2d6e7502a6c3b7dc9f2e127300c530929b1a6716108bbbb2959b7ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
