export const name="mms-fill";
export const id="dl_7e6e65ce45f848c0a900";
export const url=new URL("../icons/mms-fill.svg?v=573abdc98e65bcb8daa7867beee43c59046009c394f4deec430ebae11f1c6ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
