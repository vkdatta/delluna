export const name="speaker-x-bold";
export const id="dl_0cb552af4b82b73d2995";
export const url=new URL("../icons/speaker-x-bold.svg?v=6b50ec14b99537e4d8d25822a51b44462eb97a7d7c249cf5109681a00e4b8af9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
