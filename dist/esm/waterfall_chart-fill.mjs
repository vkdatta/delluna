export const name="waterfall_chart-fill";
export const id="dl_6447c973688e92951e7d";
export const url=new URL("../icons/waterfall_chart-fill.svg?v=74e6f8a399883db0fc573df96b0d44e1224ec4732a3709d59a89dd2c820d1d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
