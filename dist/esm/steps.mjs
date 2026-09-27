export const name="steps";
export const id="dl_cb82bf9c9d9e043fbce8";
export const url=new URL("../icons/steps.svg?v=0206285be68828a15df982d395c5a35a7334be144ba1bcdcd49c6ebf56b071fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
