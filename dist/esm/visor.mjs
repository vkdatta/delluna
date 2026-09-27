export const name="visor";
export const id="dl_a116e761131c6a79351a";
export const url=new URL("../icons/visor.svg?v=b58ff49b7fd37ce89d1696c3ef7c6d8821d1480606380c427608baa74fc7b0af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
