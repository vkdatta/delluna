export const name="18mp-fill";
export const id="dl_34ec41d92a6331f98312";
export const url=new URL("../icons/18mp-fill.svg?v=4b77691a9db06736ecedd6339a7cd946f25f91fb9545bc137c839a9939b99cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
