export const name="text-h-one-thin";
export const id="dl_d0e2077a7a5d640017ea";
export const url=new URL("../icons/text-h-one-thin.svg?v=3e475d14dc939dc2e1f941cce92d19cc76bacd9668fa62547b68da392adac83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
