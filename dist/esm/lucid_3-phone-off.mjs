export const name="lucid_3-phone-off";
export const id="dl_42fd5a2d038d4f8cb92e";
export const url=new URL("../icons/lucid_3-phone-off.svg?v=7d3cf617446b273ff833938fbc6b69fc151fc2a2eec982d8b0ef5f7b55abd358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
