export const name="terminal";
export const id="dl_8e1aed98f87a4c00b81c";
export const url=new URL("../icons/terminal.svg?v=6efd7ddc936bcf73b60a270be4f7860e926e16afa15d6eff469054c498428959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
