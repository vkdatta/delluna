export const name="lucid_2-heading-2";
export const id="dl_5ca53fae7919489c9d80";
export const url=new URL("../icons/lucid_2-heading-2.svg?v=ced45dfd9a74544131b8379319fa2743f9222de009c4aa5242c3be4c03ffb3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
