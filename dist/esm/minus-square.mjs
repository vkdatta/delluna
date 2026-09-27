export const name="minus-square";
export const id="dl_2b186086b0b0461abec7";
export const url=new URL("../icons/minus-square.svg?v=1bf494074f5773d1b65bb029900b9d6ac878cf5e1dd6df3bc456fc65aba139c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
