export const name="jar-thin";
export const id="dl_e870474ff33f4f229aa9";
export const url=new URL("../icons/jar-thin.svg?v=30655b1d9bc32bd014b9d642bbf0c7a8e64393c183f029a65da00a00c0b7b263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
