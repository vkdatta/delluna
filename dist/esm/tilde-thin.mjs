export const name="tilde-thin";
export const id="dl_5bc5fce2999dc2705818";
export const url=new URL("../icons/tilde-thin.svg?v=05595d08bf768227803cc890864aa317d6733ebe1be0068e10083fcd9d1585f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
