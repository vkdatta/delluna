export const name="earbuds";
export const id="dl_7b1accda2ddf4542924b";
export const url=new URL("../icons/earbuds.svg?v=93ce3376026c8ea72b4e7a9237dfbb3be61a665df099e6c3ca6f2bd7eb086373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
