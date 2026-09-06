export const name="paperclip-horizontal-fill";
export const id="dl_6490065ec1314170809f";
export const url=new URL("../icons/paperclip-horizontal-fill.svg?v=86587b65303a78e8d5c7740051d292f0e6dd64cec6baa1110c2486b0789b4e1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
