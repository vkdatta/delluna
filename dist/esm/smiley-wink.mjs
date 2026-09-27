export const name="smiley-wink";
export const id="dl_b2496f5b5e8100699e4c";
export const url=new URL("../icons/smiley-wink.svg?v=0038f74fe992f577f1e6acac2c95e70d2821ff6dbe5b4da86343208ee2b56287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
