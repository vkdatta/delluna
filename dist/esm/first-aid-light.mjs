export const name="first-aid-light";
export const id="dl_de83b7ff3a0344acb0da";
export const url=new URL("../icons/first-aid-light.svg?v=5d52be0150ebac2003e7492281aa5c846599bd9a220a3c4a530702ef213c948f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
