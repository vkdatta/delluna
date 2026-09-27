export const name="squares-exclude";
export const id="dl_4d8aa840f7d449d78961";
export const url=new URL("../icons/squares-exclude.svg?v=cf16bf6d952eff2f15f0ce4889d466d3de9337930a3dac2365198a9cbb7fb713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
