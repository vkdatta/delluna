export const name="chart-line-up-bold";
export const id="dl_d4902ceae7794c668d7e";
export const url=new URL("../icons/chart-line-up-bold.svg?v=608806ef37f54d44a69a611e54d950ed5820f88a24f2747dd18de22ecf9c0a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
