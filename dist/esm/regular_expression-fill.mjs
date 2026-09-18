export const name="regular_expression-fill";
export const id="dl_3c379ca40fcf4f09a00e";
export const url=new URL("../icons/regular_expression-fill.svg?v=243aa9652d5989d04b8927893e1af3eadd8e654d52f1c86c51b1e5d9a151a9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
