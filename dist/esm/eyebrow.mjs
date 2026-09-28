export const name="eyebrow";
export const id="dl_23989a3e2330d0fae5bc";
export const url=new URL("../icons/eyebrow.svg?v=6e48cde3d340d55f1ee823ce332a28b68872595f27b51251c527761e38f620d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
