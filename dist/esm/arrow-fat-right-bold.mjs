export const name="arrow-fat-right-bold";
export const id="dl_77be4270ccfb4d0ba846";
export const url=new URL("../icons/arrow-fat-right-bold.svg?v=22cc26b0a4f35ef737f57c0a9669058ed5a8c92e87257f9dad19bb6ff156c130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
