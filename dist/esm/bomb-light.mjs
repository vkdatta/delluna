export const name="bomb-light";
export const id="dl_b33036c2a30545e3a31a";
export const url=new URL("../icons/bomb-light.svg?v=bb0f0cc489f436ff90284468115495ef97892b0d305808c2b04baf1f9f3cbe8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
