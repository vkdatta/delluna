export const name="align-right-simple-light";
export const id="dl_36bb66b9d6454aa08c50";
export const url=new URL("../icons/align-right-simple-light.svg?v=b63fce34b10f497addeaa372ebe1a95885f2d80132942e14753aee4df4801fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
