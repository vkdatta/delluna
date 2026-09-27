export const name="lucid_1-calculator";
export const id="dl_4b87c1eda3f444ac9578";
export const url=new URL("../icons/lucid_1-calculator.svg?v=086182539dca3dc58a7d3bb7c2bd97d7262d19a5097bde861f42bad2a673bc29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
