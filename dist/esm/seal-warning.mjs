export const name="seal-warning";
export const id="dl_69b4dc91c7931293bc5a";
export const url=new URL("../icons/seal-warning.svg?v=7cfea3b0df8fee2fa99c930a77d3c8db493b983e95ed616c6a165fc485a4910c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
