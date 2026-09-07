export const name="arrow-fat-line-right-light";
export const id="dl_3636d28fe73e4374b23b";
export const url=new URL("../icons/arrow-fat-line-right-light.svg?v=30743105710c5516db9f62722587c8fcd0d669dc369c201eae1364d80a3bd3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
