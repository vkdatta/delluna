export const name="martini-duotone";
export const id="dl_fd38008875824722abba";
export const url=new URL("../icons/martini-duotone.svg?v=d983eed8bdc5d95abfbfd2ff56ff6e3ae18c9d5b6a26b11a3045e1ce34972957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
