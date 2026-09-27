export const name="toggle-left-duotone";
export const id="dl_011b34af03b62a4a6342";
export const url=new URL("../icons/toggle-left-duotone.svg?v=fa4e82ca2f184fcd710a44b345151b530f1fac4b9e2ef720793eed11a9ec7835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
