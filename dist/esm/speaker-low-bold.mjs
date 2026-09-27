export const name="speaker-low-bold";
export const id="dl_4f56fd6cdbb85dfb8a26";
export const url=new URL("../icons/speaker-low-bold.svg?v=2ef4909f1a13a75a734e99be3b5bf17626cf74fd9847b74c58ab95a98a8d3f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
