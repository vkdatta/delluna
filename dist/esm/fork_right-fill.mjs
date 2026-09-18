export const name="fork_right-fill";
export const id="dl_3627c6ddb1a5493d8e0e";
export const url=new URL("../icons/fork_right-fill.svg?v=76353de7b8734a577e2d123a53df46dadae5b9817d56a5f0dfa7d68b1f263a53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
