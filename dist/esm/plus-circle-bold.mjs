export const name="plus-circle-bold";
export const id="dl_9067c8fdb2de416cafad";
export const url=new URL("../icons/plus-circle-bold.svg?v=ebd62ed39521177639b366e7541fe0812f395bd3fe640c252f6fab57fbf1d5cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
