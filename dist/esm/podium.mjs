export const name="podium";
export const id="dl_396d4d670ec66f2b596d";
export const url=new URL("../icons/podium.svg?v=b1bf2de1e5388a2151cacef0f910ac742bd829d5d9669e265d339f1819bf08a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
