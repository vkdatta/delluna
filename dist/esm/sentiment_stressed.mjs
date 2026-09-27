export const name="sentiment_stressed";
export const id="dl_ceb948e27a34391289ba";
export const url=new URL("../icons/sentiment_stressed.svg?v=99bfed65adf0233f1351cec2768f1159366a66b6873775c57e0ba78525dc2fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
