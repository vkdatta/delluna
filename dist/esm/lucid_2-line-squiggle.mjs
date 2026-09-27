export const name="lucid_2-line-squiggle";
export const id="dl_a377549f4b2441b4b278";
export const url=new URL("../icons/lucid_2-line-squiggle.svg?v=ed5f64e124bcd055364206b92053b8f2e50b7156d2f473763385bfb073d169cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
