export const name="thermometer-sun";
export const id="dl_0da0a292502b4b2abbc6";
export const url=new URL("../icons/thermometer-sun.svg?v=a90d7fdc0d3a7c9b95b89eb6e2e0ebd5438e31b54cc7baa9f74e8fd8964d912c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
