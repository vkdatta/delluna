export const name="doorbell_chime-fill";
export const id="dl_45d5a10b1af13cf8f599";
export const url=new URL("../icons/doorbell_chime-fill.svg?v=3e2a827a8034f004b46461d416e6447578e7cc0b725cd0d22a13170bff4e4516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
