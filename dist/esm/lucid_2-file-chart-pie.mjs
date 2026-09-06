export const name="lucid_2-file-chart-pie";
export const id="dl_a46a11d50736475fa5d1";
export const url=new URL("../icons/lucid_2-file-chart-pie.svg?v=4784acf634fdf863c599fdfce63acb5b058a5db663bc6873a81c2d80ae286745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
