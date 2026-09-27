export const name="pencil-simple-line-fill";
export const id="dl_75c20471751f493eb34b";
export const url=new URL("../icons/pencil-simple-line-fill.svg?v=dc0242ba8372414a7165c2b85c16903d291cc98c916441cc1405eb633a583680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
