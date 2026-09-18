export const name="sentiment_sad-fill";
export const id="dl_0835d3faaea0477c9aec";
export const url=new URL("../icons/sentiment_sad-fill.svg?v=8cfb61f908cfd24dbcb7975fb4148623160ad2dc547c08bd42e3bd61f26d102d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
