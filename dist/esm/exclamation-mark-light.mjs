export const name="exclamation-mark-light";
export const id="dl_b39b746fcbe646bba161";
export const url=new URL("../icons/exclamation-mark-light.svg?v=98cc926f61a23e68b19bd1a0ca76d1d9627bec2da974c78ff5f56501cebbb75d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
