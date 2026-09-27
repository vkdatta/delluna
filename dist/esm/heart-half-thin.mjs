export const name="heart-half-thin";
export const id="dl_23a6719c9d6d4609a9e6";
export const url=new URL("../icons/heart-half-thin.svg?v=dad6898992fef75e41c24f58bd740c66383c9cdebe23d0e9b11507e37412c761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
