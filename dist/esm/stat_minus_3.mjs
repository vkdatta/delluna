export const name="stat_minus_3";
export const id="dl_6eda2c0c4f40bf2d2bd8";
export const url=new URL("../icons/stat_minus_3.svg?v=e3718f16f76306a9ae7798944d6f6106db23a2098b97f9577880bf2496fa7b20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
