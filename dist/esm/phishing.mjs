export const name="phishing";
export const id="dl_b3eca7acb919b2746ffe";
export const url=new URL("../icons/phishing.svg?v=387e9981f74c7315934bc24490da32a8330e080d5419a81c48e280d1c8aa46b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
