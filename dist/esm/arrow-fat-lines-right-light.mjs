export const name="arrow-fat-lines-right-light";
export const id="dl_0760a790c34648599f74";
export const url=new URL("../icons/arrow-fat-lines-right-light.svg?v=5d9a72df334fd67a27f27edd68fd8607a2166be5bba10f609b10e977314ab748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
