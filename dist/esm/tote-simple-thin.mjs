export const name="tote-simple-thin";
export const id="dl_b5374bd4b9e9416f8022";
export const url=new URL("../icons/T/tote-simple-thin.svg?v=54cfc6b983e3cb2728ee78f410cbadac26a45af205e8f9bfcb82a48fb843cfaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
