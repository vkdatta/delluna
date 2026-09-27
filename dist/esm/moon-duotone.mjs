export const name="moon-duotone";
export const id="dl_30a669b750174436b2ee";
export const url=new URL("../icons/moon-duotone.svg?v=9b8e9e3057051624c90d0f47d6757f23ff98c66749a22a3bb7b9fb9d44ef1ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
