export const name="sentiment_dissatisfied";
export const id="dl_bbb141db8f704da8a390";
export const url=new URL("../icons/S/sentiment_dissatisfied.svg?v=f79e6eff221cb4446b590e68d56c0b1021abc0a61f8d9d2b18f989abb4c69bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
