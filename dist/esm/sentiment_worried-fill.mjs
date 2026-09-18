export const name="sentiment_worried-fill";
export const id="dl_4798e278a5634381992a";
export const url=new URL("../icons/sentiment_worried-fill.svg?v=966160face1927891e558ea5e534b24297792ba958e1e28804375c8d01f3d7f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
