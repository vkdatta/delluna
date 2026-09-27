export const name="forest";
export const id="dl_1b5154e64b0d1bf2101d";
export const url=new URL("../icons/forest.svg?v=04637b4d9f967e7dc96313309dd277230f57c86ac86b53e2f029e4151da0bc38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
