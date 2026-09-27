export const name="caret-line-up";
export const id="dl_8db12e20069b4124b7cb";
export const url=new URL("../icons/caret-line-up.svg?v=6c57d3f9b2b0119dff0020bc17b64eebeccdf5cdec54592dbbb7143f0c3360cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
