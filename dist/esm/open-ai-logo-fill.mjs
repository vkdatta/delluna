export const name="open-ai-logo-fill";
export const id="dl_cebdb1e2615442d89ecb";
export const url=new URL("../icons/open-ai-logo-fill.svg?v=9eae850b0348f7424441876df83747b47404265be88ee18856161f68d7089291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
