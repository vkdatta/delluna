export const name="watch_off";
export const id="dl_2f31fc13b3dd84173210";
export const url=new URL("../icons/watch_off.svg?v=6022edd0aabe8fa4da322f94d6212dd22aab79f6f8f89629310fe56a35e5e02c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
