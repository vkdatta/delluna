export const name="lucid_2-map-pin-check";
export const id="dl_440ebe6c8db04fa5bb56";
export const url=new URL("../icons/lucid_2-map-pin-check.svg?v=062003cf61016f4a66f1018df6aa7bcadd77b1f13da8fb0ca59484b0d034a408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
