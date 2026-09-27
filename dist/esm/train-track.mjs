export const name="train-track";
export const id="dl_07d631d9d8404feba620";
export const url=new URL("../icons/train-track.svg?v=022baf34c6453c820613caf4b55a07e587bd0b4136ee1ef73dad087033e01d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
