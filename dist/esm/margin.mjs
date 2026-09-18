export const name="margin";
export const id="dl_82092f2380994e33894c";
export const url=new URL("../icons/margin.svg?v=bf7b3e53e384fb4587c5f6375df1a27ef5ee43ec07b0a8c1f1a26d5d78cc0c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
