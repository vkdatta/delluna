export const name="paint-roller-fill";
export const id="dl_bd5672ae4dfc45018a0b";
export const url=new URL("../icons/paint-roller-fill.svg?v=8b6e81d53d6028d5f1672aec33a9cab4cee6b321338b48cf4caaae53b36ee0bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
