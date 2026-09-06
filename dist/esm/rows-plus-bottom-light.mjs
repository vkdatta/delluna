export const name="rows-plus-bottom-light";
export const id="dl_014c52ec75fb48f3ab5d";
export const url=new URL("../icons/rows-plus-bottom-light.svg?v=5f58ff1ad39261b5a277de9d068f5fa9c4459117939d1bb4a3b527da16e1d120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
