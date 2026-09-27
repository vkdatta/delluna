export const name="sentiment_neutral-fill";
export const id="dl_e855793eb2c44f1cebbe";
export const url=new URL("../icons/sentiment_neutral-fill.svg?v=a71ad255f486591b9e9080793e92bb09920170a0403d9c9d7e7c2741f53d8db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
