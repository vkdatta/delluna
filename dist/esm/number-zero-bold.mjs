export const name="number-zero-bold";
export const id="dl_ee0c566ab2524a3e823a";
export const url=new URL("../icons/number-zero-bold.svg?v=415ab43edd7d1b5be18c1dd9ddf8ea22f396f94ef4fb7e4fcf13f2a25787118c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
