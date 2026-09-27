export const name="lucid_2-mail-clock";
export const id="dl_0df6af0f288a4c43b5c4";
export const url=new URL("../icons/lucid_2-mail-clock.svg?v=591b34807a4e782649ea00424b1d62773f3a487b59a9033c028670d20fb84f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
