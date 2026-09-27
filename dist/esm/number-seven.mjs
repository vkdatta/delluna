export const name="number-seven";
export const id="dl_8ec0f672134745b4b106";
export const url=new URL("../icons/number-seven.svg?v=31dc598e7b929d707c0e28989ac8b3164df9b6462a9885b8f551a56bfa42abd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
