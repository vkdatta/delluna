export const name="number-square-zero-thin";
export const id="dl_059205b5984c454e9df3";
export const url=new URL("../icons/number-square-zero-thin.svg?v=e9ad096af5b6dc89ddd726873229fdb272d11b2afe9130f92d67dde4411199e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
