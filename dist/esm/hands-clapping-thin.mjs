export const name="hands-clapping-thin";
export const id="dl_e1b283cc00214d779bac";
export const url=new URL("../icons/hands-clapping-thin.svg?v=6b4ce37001109b287db56c538a6ffe39a104e668434547611d50fe8f78705f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
