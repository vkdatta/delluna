export const name="ungroup-fill";
export const id="dl_bee783de6e8e440c9944";
export const url=new URL("../icons/U/ungroup-fill.svg?v=b0495c85a532089827a887d1e2e33d9d5b6e2116be7fa505ca27818f1d49b0e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
