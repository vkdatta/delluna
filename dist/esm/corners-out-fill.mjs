export const name="corners-out-fill";
export const id="dl_5be14bdc040b454c816b";
export const url=new URL("../icons/corners-out-fill.svg?v=a769c40471315690eee6f4fafd7e1b5cc66bca5cb1dfa9f4eb494cdb54b9f09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
