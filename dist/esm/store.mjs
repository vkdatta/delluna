export const name="store";
export const id="dl_3d80b7d66e614b07b9b2";
export const url=new URL("../icons/store.svg?v=33f6725223c2019c50d79efd72022e014dac6d6de8e07e702144d1748a82fb7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
