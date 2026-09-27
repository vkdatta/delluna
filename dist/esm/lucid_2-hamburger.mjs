export const name="lucid_2-hamburger";
export const id="dl_69181a2999ae450ba230";
export const url=new URL("../icons/lucid_2-hamburger.svg?v=ce4c0a22fd618f6232d9d483d4cb7960c9e1a1440a5163d4ab5f61f8dfccc476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
