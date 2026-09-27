export const name="close_small-fill";
export const id="dl_c89d37a812ba82d8b6fc";
export const url=new URL("../icons/close_small-fill.svg?v=d82ed708c15d1fd95d43f27efa191467eaf4b6255eeba6b89e03c0c0b49f893d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
