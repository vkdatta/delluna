export const name="bug-droid-duotone";
export const id="dl_c92138511d3b430a9dc6";
export const url=new URL("../icons/bug-droid-duotone.svg?v=6da3a06538c70b34e510426b7607cf6029e31f59ea0f506367b3c213788d18f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
