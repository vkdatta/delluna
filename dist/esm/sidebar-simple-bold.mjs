export const name="sidebar-simple-bold";
export const id="dl_54bfe0ab852bdcd72790";
export const url=new URL("../icons/sidebar-simple-bold.svg?v=b4fe1e5e2c02b1737ec630b0e7bc600a434bc865cfc21fada8beb1b957c4c21d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
