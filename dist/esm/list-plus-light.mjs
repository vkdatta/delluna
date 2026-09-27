export const name="list-plus-light";
export const id="dl_58bb793a7e2647b5bdf8";
export const url=new URL("../icons/list-plus-light.svg?v=fa211896bf619f073f987e713b3a2f60c0452ebc4468e85d18f5798c2813700f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
