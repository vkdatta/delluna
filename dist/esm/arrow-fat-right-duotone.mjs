export const name="arrow-fat-right-duotone";
export const id="dl_cf6328e139b14391b81b";
export const url=new URL("../icons/arrow-fat-right-duotone.svg?v=cff331834a2cfa57fc74c5ca4b56fab4920d1d2072a927f4aeefab337b5abb15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
