export const name="arrows-in-line-vertical-thin";
export const id="dl_38d777b81e8749349547";
export const url=new URL("../icons/arrows-in-line-vertical-thin.svg?v=8072118217b1391c5616d9a3ba7cec6c8b0314216f37b9af20b3253439e11a23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
