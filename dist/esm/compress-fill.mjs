export const name="compress-fill";
export const id="dl_546b71a420bd412689d5";
export const url=new URL("../icons/compress-fill.svg?v=65459c0cff4b826c4a69264ccca5a840448cf23c6318307023a886c55e883c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
