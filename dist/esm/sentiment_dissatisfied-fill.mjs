export const name="sentiment_dissatisfied-fill";
export const id="dl_45511bf92d3e936e66eb";
export const url=new URL("../icons/sentiment_dissatisfied-fill.svg?v=598fb911627bb8d3ed323442ecf09d03f1e3e798f595ec3795ee562269399f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
