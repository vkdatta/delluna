export const name="breaking_news_alt_1-fill";
export const id="dl_c5bee55a57de7625a818";
export const url=new URL("../icons/breaking_news_alt_1-fill.svg?v=5da77e21c46d50e8dc84180b8e3500edfe694ff5f6f1b17b7f0e098a56940ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
