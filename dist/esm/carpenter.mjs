export const name="carpenter";
export const id="dl_52c8ec1fdf3143e98694";
export const url=new URL("../icons/carpenter.svg?v=4fd0a298f17e1caeb9e9dedaf9b6ce6dddb71e840f9a93131d97397a3df9b9bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
