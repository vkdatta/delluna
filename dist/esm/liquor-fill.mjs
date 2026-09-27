export const name="liquor-fill";
export const id="dl_c27ccd0b774b9ebed022";
export const url=new URL("../icons/liquor-fill.svg?v=ceaed989e714c99b5f74e4520d8e5b9c6d9e8483c0a70d8fc644ff009d78e05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
