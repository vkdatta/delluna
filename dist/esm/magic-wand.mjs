export const name="magic-wand";
export const id="dl_6dfe07cc59e74248a784";
export const url=new URL("../icons/magic-wand.svg?v=91081dfdad19006625f8a40a64ea967bb77ecf3d11cebda06c25b217b228dc12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
