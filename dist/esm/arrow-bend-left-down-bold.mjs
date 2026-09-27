export const name="arrow-bend-left-down-bold";
export const id="dl_6a607b54329446048614";
export const url=new URL("../icons/arrow-bend-left-down-bold.svg?v=1cefd71146570f1c63ef92c8ac4480d5863500062fa3911c55c197666cf85a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
