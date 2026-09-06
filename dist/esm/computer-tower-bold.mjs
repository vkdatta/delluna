export const name="computer-tower-bold";
export const id="dl_d4c4ed1e52914805b0b6";
export const url=new URL("../icons/computer-tower-bold.svg?v=1069de2828494ed6ea7fe872d3d63808afbe283f79ce62501495be497322f559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
