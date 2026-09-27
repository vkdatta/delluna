export const name="solar-panel";
export const id="dl_67a65ebc398cc332b8bd";
export const url=new URL("../icons/solar-panel.svg?v=a9139676813661033b3cc93658fe23cb5793e3804486d422ae2cf4e79a04ded6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
