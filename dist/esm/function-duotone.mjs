export const name="function-duotone";
export const id="dl_a15cc21efec443eebdf0";
export const url=new URL("../icons/function-duotone.svg?v=ab65e1cb1054a638900158f3a4104fc912f2358cb440fcaf7e38768353e6b29e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
