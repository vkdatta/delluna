export const name="solar-panel-fill";
export const id="dl_bb4e43c36bf24311a32a";
export const url=new URL("../icons/S/solar-panel-fill.svg?v=0f1ee2cd5473fe554404c9a41695fccf8455f7dee9f100e359e828419d7c684a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
