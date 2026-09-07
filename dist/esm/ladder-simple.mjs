export const name="ladder-simple";
export const id="dl_22a838da40304b078572";
export const url=new URL("../icons/ladder-simple.svg?v=34988b5fdcdd151a524f36da19428a1bdae24d684519355ab6eb9996bb5cfd63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
