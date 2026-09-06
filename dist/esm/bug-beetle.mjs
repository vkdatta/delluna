export const name="bug-beetle";
export const id="dl_ead35ac7f54e49ef8eb3";
export const url=new URL("../icons/bug-beetle.svg?v=72446376e6ae14201c4058f94ccdbc6f78b408be00e42738a3fc4385a4852b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
