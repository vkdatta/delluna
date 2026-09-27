export const name="caret-circle-right";
export const id="dl_2af628287cba4e2cadeb";
export const url=new URL("../icons/caret-circle-right.svg?v=bebb7e1b8aaf7a6a12ec411c8c5483871a6156be45a6d93498231ed1337d6915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
