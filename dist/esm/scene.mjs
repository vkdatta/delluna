export const name="scene";
export const id="dl_98116ababc70d1cc32ae";
export const url=new URL("../icons/scene.svg?v=36536487c6dd12fbbdb6f233e212f9bd79623f395c9302656bc96454493f7a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
