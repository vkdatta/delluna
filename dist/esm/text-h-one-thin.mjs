export const name="text-h-one-thin";
export const id="dl_5bb5990a988049899d70";
export const url=new URL("../icons/T/text-h-one-thin.svg?v=3e475d14dc939dc2e1f941cce92d19cc76bacd9668fa62547b68da392adac83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
