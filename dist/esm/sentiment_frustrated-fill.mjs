export const name="sentiment_frustrated-fill";
export const id="dl_a1504b71ddd24f19afba";
export const url=new URL("../icons/sentiment_frustrated-fill.svg?v=3edc124742a0c21311ffb3cf2e42abf8de6c9d5175a470e701b99b2eaf68fdb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
