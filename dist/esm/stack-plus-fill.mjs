export const name="stack-plus-fill";
export const id="dl_9e2c1018f5554caf9056";
export const url=new URL("../icons/S/stack-plus-fill.svg?v=06b9efb42b466a17982fb3ef945e01d612d9bd4f165aa60ab681887418572367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
