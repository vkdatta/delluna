export const name="sun-moon";
export const id="dl_4aed4afb739943e4b671";
export const url=new URL("../icons/sun-moon.svg?v=9a66205d95c8976a3bc77384cbd1857f08e6046455627ca8599edd2f052e28af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
