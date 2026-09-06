export const name="checkerboard";
export const id="dl_dd1b31668f4e438ab74e";
export const url=new URL("../icons/checkerboard.svg?v=3c8d731e97b570e3c3684a3a46e15e03d33efa62eadfec7c046da418bd9d3fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
