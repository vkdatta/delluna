export const name="lucid_2-file-chart-pie";
export const id="dl_a46a11d50736475fa5d1";
export const url=new URL("../icons/lucid_2-file-chart-pie.svg?v=625911b390784a55399595710a6e611bb00e4fcce26be3a9b270f4b645bced66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
