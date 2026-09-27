export const name="ranking-light";
export const id="dl_2ce87638c3ef47329bc5";
export const url=new URL("../icons/ranking-light.svg?v=1563e67cf61b132c3a60f445945e74dd38f13188d4a366e9b47fa35bca461bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
