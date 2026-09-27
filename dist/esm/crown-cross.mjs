export const name="crown-cross";
export const id="dl_afd74669e30d46189499";
export const url=new URL("../icons/crown-cross.svg?v=7a6157f0249bfb12c88c6490a2586480c47ec476d88a792ab3541e17b33246b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
