export const name="lucid_2-heading-2";
export const id="dl_5ca53fae7919489c9d80";
export const url=new URL("../icons/lucid_2-heading-2.svg?v=41ce22bd9b2ca534109fdb52da924c5773ba66fa2a527a34fe3219380e0dd807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
