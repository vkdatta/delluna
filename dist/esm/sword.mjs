export const name="sword";
export const id="dl_cd574fec96604b9fba73";
export const url=new URL("../icons/sword.svg?v=799a21d37f6bbad31d6209e139d4cfba471fe89a240ac4835bd53a9203fe7320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
