export const name="record_voice_over-fill";
export const id="dl_99270b1940244bdaadf5";
export const url=new URL("../icons/record_voice_over-fill.svg?v=b3acc9c361a2782a21663b2730a456dffb5ede4a208297b73fc0209270ae8b8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
