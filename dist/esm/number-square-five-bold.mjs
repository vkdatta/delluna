export const name="number-square-five-bold";
export const id="dl_8008998795b84b0fbda0";
export const url=new URL("../icons/number-square-five-bold.svg?v=34cbfd7a8b4671046518cb24f227369ae0245d841856cac0202f8f3ce3acb8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
