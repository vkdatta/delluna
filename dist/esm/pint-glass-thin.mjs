export const name="pint-glass-thin";
export const id="dl_af6867c5ef5a424d9550";
export const url=new URL("../icons/pint-glass-thin.svg?v=b89097ebf54152ed150d25e26217e40c5ffa12f8d4e568a31e11e922fd11d10b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
