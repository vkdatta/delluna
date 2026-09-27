export const name="colorize-fill";
export const id="dl_864200a4138e17f802f0";
export const url=new URL("../icons/colorize-fill.svg?v=241ecc96094e7cd4994e931fceac3febb18eda1fa3def965510408abcce179b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
