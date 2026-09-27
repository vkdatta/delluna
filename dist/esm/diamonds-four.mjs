export const name="diamonds-four";
export const id="dl_60eece63a64d4f83889f";
export const url=new URL("../icons/diamonds-four.svg?v=8d0dd370a2902e9d43ea39d150c45676079e3ec15f7eceed3c89c6f920f03ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
