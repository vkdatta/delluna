export const name="mobile_block-fill";
export const id="dl_46139cda6c7e4186818c";
export const url=new URL("../icons/mobile_block-fill.svg?v=1a58c46ca0d018b7c31a43e9fda125c3471eed02b4a5bb067dbef863fb09b8a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
