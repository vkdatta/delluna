export const name="sun-moon";
export const id="dl_4aed4afb739943e4b671";
export const url=new URL("../icons/sun-moon.svg?v=fd96c5ddbda5d1d673097b0454b8ba50f770c496268b0695b31b7f85f9bf49c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
