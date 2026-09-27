export const name="bowl-food-light";
export const id="dl_49fed28380834d08b42a";
export const url=new URL("../icons/bowl-food-light.svg?v=8bf961aa5b96efbdb6a2506fc65b77e8f6a0698420776525478059304378428e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
