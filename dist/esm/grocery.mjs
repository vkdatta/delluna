export const name="grocery";
export const id="dl_1a978ef06d404adab1b3";
export const url=new URL("../icons/grocery.svg?v=76f3c3aa4cfb33961636855526529f6d4e5a120988b89cbc4ce3d075470963de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
