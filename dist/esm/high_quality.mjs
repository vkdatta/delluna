export const name="high_quality";
export const id="dl_a8b9aa852f01af23f79c";
export const url=new URL("../icons/high_quality.svg?v=25ea455e2a64e3830ba6e003b04e22e2fed854fa49523049e9e2f29866919589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
