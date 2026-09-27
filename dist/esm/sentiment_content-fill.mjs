export const name="sentiment_content-fill";
export const id="dl_3bfb44582cd7df7506ea";
export const url=new URL("../icons/sentiment_content-fill.svg?v=a2ad7808c575442dd48a14ee308b98c18bd9a718825adf29c7e005905f637bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
