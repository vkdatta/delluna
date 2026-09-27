export const name="fluorescent-fill";
export const id="dl_bb5603ad5616390e1942";
export const url=new URL("../icons/fluorescent-fill.svg?v=45747c9c9477922442e1719221235f5c4f88512269dfdd69a32c607ba57beed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
