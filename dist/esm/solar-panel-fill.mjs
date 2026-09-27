export const name="solar-panel-fill";
export const id="dl_890cf95791690f61b772";
export const url=new URL("../icons/solar-panel-fill.svg?v=0f1ee2cd5473fe554404c9a41695fccf8455f7dee9f100e359e828419d7c684a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
