export const name="sentiment_neutral";
export const id="dl_3fdb7c8ba2f3ec04f87b";
export const url=new URL("../icons/sentiment_neutral.svg?v=9293f35df4e99cff2a0bd913ba0c9c8b731b6f9cc989f0bde4fc085cf9ff5dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
