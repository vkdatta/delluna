export const name="error_med-fill";
export const id="dl_d97c050cbe1f4b5ea6a0";
export const url=new URL("../icons/error_med-fill.svg?v=222301b37b7fd9a19dfa4744094e66958aa8b0d7aeb90b7d60ce91eee0c6eea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
