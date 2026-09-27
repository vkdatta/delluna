export const name="subtract-square-light";
export const id="dl_6e4755dd9eb48f6fbc33";
export const url=new URL("../icons/subtract-square-light.svg?v=0e79dcfdf2b2c660a8092288c510970a1b80f617029361440aeb24579745305b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
