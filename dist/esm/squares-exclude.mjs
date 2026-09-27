export const name="squares-exclude";
export const id="dl_4d8aa840f7d449d78961";
export const url=new URL("../icons/squares-exclude.svg?v=1d52c3e5fc65c0f52287d773580a705bbbbc40a9ea7ecc3a771cbbe6f8c33f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
