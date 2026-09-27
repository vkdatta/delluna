export const name="arrow-elbow-up-left-thin";
export const id="dl_d1f036782b254ec19333";
export const url=new URL("../icons/arrow-elbow-up-left-thin.svg?v=a440f0a0880eba7860bb13cc2d99c7f62482b0fd4cc92aa40ee22797f53478c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
