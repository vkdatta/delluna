export const name="lucid_2-ellipse";
export const id="dl_2feadfea66b941a6a9eb";
export const url=new URL("../icons/lucid_2-ellipse.svg?v=7c4bcabb6b8f795492f4971ae2c43cf7828890163f5737e70f8837168ea677d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
