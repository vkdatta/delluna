export const name="view_quilt";
export const id="dl_b6b7fe3c1b428832da3c";
export const url=new URL("../icons/view_quilt.svg?v=9e9ca76c8390483031295f06c6dd874f6f9f0b168abc346c02a9618c96ad7517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
