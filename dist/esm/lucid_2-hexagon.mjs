export const name="lucid_2-hexagon";
export const id="dl_eeb955cfc7274f6ea417";
export const url=new URL("../icons/lucid_2-hexagon.svg?v=6f3cd00b047c6426335cfcd1b712e8d98cd1817550a7333bcdf26af155827bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
