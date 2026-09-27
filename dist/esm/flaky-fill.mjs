export const name="flaky-fill";
export const id="dl_9909dd203e4c3a95f8b7";
export const url=new URL("../icons/flaky-fill.svg?v=ca50f2e95ce8cba9dd5b3dacbff70e9ee1de90cc025dfd9bb7291716cfa09a7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
