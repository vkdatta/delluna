export const name="confetti";
export const id="dl_f6b1a86277b74696a326";
export const url=new URL("../icons/confetti.svg?v=bf39523fcc62788af955a5f268bb8d393b6cdc5d736464ecd51869a5c033fdb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
