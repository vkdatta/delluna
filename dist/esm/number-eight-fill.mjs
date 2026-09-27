export const name="number-eight-fill";
export const id="dl_7727e94ab53c45c6a134";
export const url=new URL("../icons/number-eight-fill.svg?v=3daa9c0134f56b59d0ae31ff419861d86e9d6cd1a1780534176d2f0d1e5f02b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
