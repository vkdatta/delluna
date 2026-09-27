export const name="ecg-fill";
export const id="dl_b7e3f14444632f9ee629";
export const url=new URL("../icons/ecg-fill.svg?v=407d51b5d0c31f8fc4df4f2f2babb623d61b1bb475469b765f53de47d833370a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
