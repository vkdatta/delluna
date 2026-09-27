export const name="shovel-light";
export const id="dl_e57e7942e62e34879cc3";
export const url=new URL("../icons/shovel-light.svg?v=ab834ab787e37d5bddaed0b67aefbfb621dded83fa13a6c5c6ae7278a99a78e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
