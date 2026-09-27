export const name="arrow-fat-up-fill";
export const id="dl_50734ecdd5d44808bf43";
export const url=new URL("../icons/arrow-fat-up-fill.svg?v=14f827518ee30231945a990a5f21103c30f4b5519d9f8bcd1efce4b700dbc1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
