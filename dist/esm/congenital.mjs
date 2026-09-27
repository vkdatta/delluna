export const name="congenital";
export const id="dl_14f1f8e541f4d0f07567";
export const url=new URL("../icons/congenital.svg?v=c0b8e40384962aae2cb628910c51f48ec11adefcb87c722e27121fa16069cb9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
