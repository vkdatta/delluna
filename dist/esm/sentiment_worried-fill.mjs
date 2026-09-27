export const name="sentiment_worried-fill";
export const id="dl_7c367e999a81c078a7b4";
export const url=new URL("../icons/sentiment_worried-fill.svg?v=e119fad4817f93b0a6e667df729b9d1ec2691685d9505fd5d3c8c180af66f530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
