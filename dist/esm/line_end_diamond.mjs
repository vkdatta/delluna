export const name="line_end_diamond";
export const id="dl_f3b8378347b3c3ff730c";
export const url=new URL("../icons/line_end_diamond.svg?v=14a77553d89d8460269062fcc65a1e26516cb44590b16145f92a0e2b3150846f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
