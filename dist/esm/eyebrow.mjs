export const name="eyebrow";
export const id="dl_7439d862e9ea46ce89aa";
export const url=new URL("../icons/E/eyebrow.svg?v=6e48cde3d340d55f1ee823ce332a28b68872595f27b51251c527761e38f620d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
