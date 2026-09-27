export const name="square-logo-bold";
export const id="dl_4fd5044f63ef6015062c";
export const url=new URL("../icons/square-logo-bold.svg?v=97102fad4880e065ee7b961bdf6c0002f3657c4a5e7b2b8d5b270b7d854bcc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
