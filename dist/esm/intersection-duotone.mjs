export const name="intersection-duotone";
export const id="dl_9a985ab7a1fe41fab048";
export const url=new URL("../icons/intersection-duotone.svg?v=d31ef3da981a4bc2492944e378285e94d447ff1392f5ab91b2fcc131eae8ac85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
