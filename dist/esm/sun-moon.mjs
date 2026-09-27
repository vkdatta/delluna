export const name="sun-moon";
export const id="dl_4aed4afb739943e4b671";
export const url=new URL("../icons/sun-moon.svg?v=6270731985e56bfd7e3b6c9a503ced04e2074803e1cfa5c2dab9a5382b8654da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
