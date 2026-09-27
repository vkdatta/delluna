export const name="escalator-fill";
export const id="dl_cad8913a09c554912d9d";
export const url=new URL("../icons/escalator-fill.svg?v=11a8f0ce65d847d578597ab28c5a91b2efbe559aca19571c23f6613d69dd8c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
