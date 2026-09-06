export const name="drone-fill";
export const id="dl_495ae1dea80645b0a7a1";
export const url=new URL("../icons/drone-fill.svg?v=f694a080d7f3c78be8bcba894d04960abc2cc50188c03cbb52b3c6218ef9d9ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
