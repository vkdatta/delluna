export const name="arrow-fat-left-fill";
export const id="dl_fb380522b65e4b64bfbf";
export const url=new URL("../icons/arrow-fat-left-fill.svg?v=db823a6fb02b862c1d3d4b08db2e4a31e39dc7f9278da6c0b83a9464627ae9e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
