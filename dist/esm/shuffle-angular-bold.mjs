export const name="shuffle-angular-bold";
export const id="dl_855183a2b986fc6e4d43";
export const url=new URL("../icons/shuffle-angular-bold.svg?v=102322907560511f88e77f7e390c341960abf9787b49afc6f413f81b0812a912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
