export const name="lucid_2-frame";
export const id="dl_6d73f418d6d94e56b751";
export const url=new URL("../icons/lucid_2-frame.svg?v=503d3d37af7f794081c21c92494c09b0a8c70ab1850313dd3a27adea9c8c6fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
