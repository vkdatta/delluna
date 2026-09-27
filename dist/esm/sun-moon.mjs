export const name="sun-moon";
export const id="dl_4aed4afb739943e4b671";
export const url=new URL("../icons/sun-moon.svg?v=ea49ea758065eac66d40d89adf5e69c3568a7c3020e9f68ba1bb1c16a2a9b273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
