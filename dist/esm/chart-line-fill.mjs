export const name="chart-line-fill";
export const id="dl_12686aa0334d466097cd";
export const url=new URL("../icons/chart-line-fill.svg?v=3383cd3e6aa53d2b1dcde1209589764326fd8a97d61b141e199c94974a150187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
