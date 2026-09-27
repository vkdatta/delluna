export const name="caret-double-right-light";
export const id="dl_2cac7cad938e40b58332";
export const url=new URL("../icons/caret-double-right-light.svg?v=3053d7cd02e891ac48d59c07b5b6ffb1b2c847725e7f3b124b10b38a45fe8ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
