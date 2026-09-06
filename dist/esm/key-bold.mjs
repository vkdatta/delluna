export const name="key-bold";
export const id="dl_997d3b45825642a9b091";
export const url=new URL("../icons/key-bold.svg?v=598224bfdb39a83437167853b4021a21336941900e2dec0f64399f25723f4984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
