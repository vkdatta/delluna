export const name="arrow-line-up-thin";
export const id="dl_71891de9955142c893b2";
export const url=new URL("../icons/arrow-line-up-thin.svg?v=ef197248a3053dbbc4937e7577444ba75748ff9f782414d719251d9c5d67e7dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
