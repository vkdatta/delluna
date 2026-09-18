export const name="sentiment_extremely_dissatisfied-fill";
export const id="dl_fa9bcb98a4a44d0e83a6";
export const url=new URL("../icons/sentiment_extremely_dissatisfied-fill.svg?v=ec2698f7de9e35042caacd16bbdb694ffc14b5bf74964192b67f745a1a12a658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
