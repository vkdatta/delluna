export const name="lucid_2-luggage";
export const id="dl_f507c993da7d4c6381a1";
export const url=new URL("../icons/lucid_2-luggage.svg?v=c73a405ea6fe525573d815dd15f4cd3b46870d18969fc3274e005dbccd1fa26b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
