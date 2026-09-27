export const name="lego-smiley-fill";
export const id="dl_de526e4653a146999487";
export const url=new URL("../icons/lego-smiley-fill.svg?v=022e9bc9db12b93d6616544d3b70cce743aa0af34b5f03e8f1c1a7bc207004e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
