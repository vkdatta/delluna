export const name="arrow-bend-down-right-bold";
export const id="dl_772aa05da92d41eda53b";
export const url=new URL("../icons/arrow-bend-down-right-bold.svg?v=db8e4fe1415335a06b85d6003ae355f7148fd4e9a2cdd9f39ea55e1b51226a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
