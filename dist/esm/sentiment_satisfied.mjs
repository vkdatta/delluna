export const name="sentiment_satisfied";
export const id="dl_881d64f63b830a24f5c0";
export const url=new URL("../icons/sentiment_satisfied.svg?v=fd100ff0809f68e4378b436b6d6d3ac5d7d8a04c8e12a8792c882627b8b441a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
