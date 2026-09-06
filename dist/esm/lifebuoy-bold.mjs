export const name="lifebuoy-bold";
export const id="dl_bbbb5828cff5450383fd";
export const url=new URL("../icons/lifebuoy-bold.svg?v=6e9161a4fea683f3bc0d631fa57db33823b423ef7f0b6696deaf09d879fc0b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
