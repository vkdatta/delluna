export const name="caret-circle-right";
export const id="dl_2af628287cba4e2cadeb";
export const url=new URL("../icons/caret-circle-right.svg?v=0d18f39ee6b471933a35c476feee9c22fcce6034c44d8c3f34f4e60f77948459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
