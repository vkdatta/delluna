export const name="lucid_3-shield-lock";
export const id="dl_8e5b2c1c96de4dc5b0ff";
export const url=new URL("../icons/lucid_3-shield-lock.svg?v=6d3f46ea042430a09dc0e27fb9b44389e59d78669a8ac715e1c27c103c7020a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
