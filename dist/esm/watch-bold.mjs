export const name="watch-bold";
export const id="dl_f03948cd3e4116dfa80b";
export const url=new URL("../icons/watch-bold.svg?v=d3835acf0fa8e27d95d253316b2364d2d9a7050a044e61ad6f6e9403d77d34b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
