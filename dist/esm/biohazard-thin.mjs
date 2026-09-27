export const name="biohazard-thin";
export const id="dl_146122b90f8c43a898ae";
export const url=new URL("../icons/biohazard-thin.svg?v=bda49c549ba1e507a2bd6e2ad03672a79160075c4aa9b3ea065b6d26113d2cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
