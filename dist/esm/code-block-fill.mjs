export const name="code-block-fill";
export const id="dl_03e12724a3314780ae2a";
export const url=new URL("../icons/code-block-fill.svg?v=2dac20a85e460f480efa5a08968b87ffb039fbd4a9a7d71b6191f6db6eaa1f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
