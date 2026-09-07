export const name="text-h-one-duotone";
export const id="dl_5408317166ea47d8a319";
export const url=new URL("../icons/T/text-h-one-duotone.svg?v=0d7110b46862bd038bdca8868a46aa5532efff19a257a8d20d571ac52f4c17d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
