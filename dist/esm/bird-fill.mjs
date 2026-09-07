export const name="bird-fill";
export const id="dl_6db9b166e3d7407bad19";
export const url=new URL("../icons/bird-fill.svg?v=8509262cd0642bb63c977207f53823760a0be6dd43f12ad7444df19914b9b085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
