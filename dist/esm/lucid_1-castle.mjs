export const name="lucid_1-castle";
export const id="dl_51a05cc74cd849f3ae04";
export const url=new URL("../icons/lucid_1-castle.svg?v=baa94c066a774757399fd3ee965c50f5d07398bb3684d6fe1854996f615977a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
