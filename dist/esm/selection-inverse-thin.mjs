export const name="selection-inverse-thin";
export const id="dl_c12835b694fa51fb7c8f";
export const url=new URL("../icons/selection-inverse-thin.svg?v=682dde38c29b83152d83ff062c9f45c4c3cf073f6efe15ac1d36281bf99a5eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
