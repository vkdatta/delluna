export const name="acupuncture-fill";
export const id="dl_d6391d1b9fb4f5fbfb1b";
export const url=new URL("../icons/acupuncture-fill.svg?v=efc4849fd1d5fdce4731fc547310139eb68c0893663a0f568baa35c439d09dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
