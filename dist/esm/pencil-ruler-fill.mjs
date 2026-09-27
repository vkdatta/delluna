export const name="pencil-ruler-fill";
export const id="dl_40784b93aa984416a4db";
export const url=new URL("../icons/pencil-ruler-fill.svg?v=ec02f2e95ca84375f48636bb1f665bb65294d42683e7b0613a6170c41944d2d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
