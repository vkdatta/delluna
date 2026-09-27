export const name="navigation-arrow-duotone";
export const id="dl_f9f87265098e458b9cdb";
export const url=new URL("../icons/navigation-arrow-duotone.svg?v=bd04e3df9ad6098fc6f9b897f49926a187036e725e52d3eaaa7bd868a87324af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
