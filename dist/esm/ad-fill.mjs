export const name="ad-fill";
export const id="dl_55b280e720b206ed4cc3";
export const url=new URL("../icons/ad-fill.svg?v=d28558f8086dfaad9c85ecd6b57b87035fe9c4952725b4376b1a94f611853e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
