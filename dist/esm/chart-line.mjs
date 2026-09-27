export const name="chart-line";
export const id="dl_0c86565a1a4a4aefb647";
export const url=new URL("../icons/chart-line.svg?v=9d71494dc7cfed13360aaa0505ec193a9fc0deb16d760e25841a05391ea43957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
