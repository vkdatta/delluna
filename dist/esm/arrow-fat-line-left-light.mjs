export const name="arrow-fat-line-left-light";
export const id="dl_4bd1c9ad52f943eea14f";
export const url=new URL("../icons/arrow-fat-line-left-light.svg?v=f51db04279f72330a7eb28bd582deffdc63cd842e9d65014b8f2543342966557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
