export const name="wine-duotone";
export const id="dl_6151d4f7e4d94553a5b3";
export const url=new URL("../icons/W/wine-duotone.svg?v=77fd20667bd0dea59610d10025cf56ad34eece9f265d77441775cfdf385f27b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
