export const name="sentiment_very_dissatisfied";
export const id="dl_b10f00fcdc09424ef846";
export const url=new URL("../icons/sentiment_very_dissatisfied.svg?v=c50b45a1256d4f73c9e7c0453b49f5953921f4d58e1b587b2664ea7a9dd679f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
