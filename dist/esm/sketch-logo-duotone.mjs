export const name="sketch-logo-duotone";
export const id="dl_ce9046fb793513cb8e74";
export const url=new URL("../icons/sketch-logo-duotone.svg?v=3fb10540d6b562ff463c57887388ebaa845ac3ab51b3fb74d507e7bc55d8f94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
