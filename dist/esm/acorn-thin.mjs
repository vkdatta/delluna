export const name="acorn-thin";
export const id="dl_6f253504958c4bb8ba23";
export const url=new URL("../icons/acorn-thin.svg?v=4770e87503f062461904030ac93f51a85279f893679cc7dd533240d59cf702ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
