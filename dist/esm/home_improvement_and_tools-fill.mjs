export const name="home_improvement_and_tools-fill";
export const id="dl_6344a35e8567066ed1df";
export const url=new URL("../icons/home_improvement_and_tools-fill.svg?v=d23d842b81f357bc13da8da4b86db5a783da09a895df0fe7da950557245c1205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
