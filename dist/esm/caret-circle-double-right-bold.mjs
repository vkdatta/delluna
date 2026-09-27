export const name="caret-circle-double-right-bold";
export const id="dl_4422c6b52a644b95b143";
export const url=new URL("../icons/caret-circle-double-right-bold.svg?v=646e65ee71a4e1bd61cf4c6b58cddfb54c2ee44099306383ccddcd0a966b7386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
