export const name="envelope-simple-open-duotone";
export const id="dl_d07b0b003d064a22ac92";
export const url=new URL("../icons/envelope-simple-open-duotone.svg?v=49baf3b2afe181c4ea8ea475430f3ac5882da7ceca6eaa52854381624e90a810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
