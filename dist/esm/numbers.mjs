export const name="numbers";
export const id="dl_924ae0c42824f022472c";
export const url=new URL("../icons/numbers.svg?v=de1b6fbd457a12c50198f3135e29a02c8e6854a1ac024074521e5f985e38a30e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
