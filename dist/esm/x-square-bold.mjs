export const name="x-square-bold";
export const id="dl_29038c3b8a8879024907";
export const url=new URL("../icons/x-square-bold.svg?v=05b4b520545a2bab2910bae6cfddcb32602e6ef614093b8c933729aa2b4b5b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
