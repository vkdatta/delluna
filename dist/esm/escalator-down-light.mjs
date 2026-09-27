export const name="escalator-down-light";
export const id="dl_eaaea045eb184cd3a0c6";
export const url=new URL("../icons/escalator-down-light.svg?v=2061b2b8270469c8e334f8d7affcafc5de44c708b2f480d99942d889d0f9fb25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
