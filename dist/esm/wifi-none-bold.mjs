export const name="wifi-none-bold";
export const id="dl_18c8e10fe6206fc0f24c";
export const url=new URL("../icons/wifi-none-bold.svg?v=74d42d9972492e314d4ac47172ec479824dd07ce732a0269375cdbff820c22e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
