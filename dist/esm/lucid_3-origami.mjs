export const name="lucid_3-origami";
export const id="dl_93dcaf8ec9cb48abbed3";
export const url=new URL("../icons/lucid_3-origami.svg?v=a98cff51922f765f366549dfb93e8e27af03a7d8787cb0af9745557f249c4957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
