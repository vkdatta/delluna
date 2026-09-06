export const name="tally-4";
export const id="dl_eebbc80bcd224a84bbb8";
export const url=new URL("../icons/tally-4.svg?v=063e0c3f5640033e8cdc34f982e1b85dd036598ea758b5061da26f26ad6098b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
