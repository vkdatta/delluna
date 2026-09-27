export const name="sentiment_excited";
export const id="dl_e1159df8be13f001e971";
export const url=new URL("../icons/sentiment_excited.svg?v=378f8e6e46b8d13aa1b6c535a3e773c9eaf6ec8d2201fcff08aa2e7f989c54c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
