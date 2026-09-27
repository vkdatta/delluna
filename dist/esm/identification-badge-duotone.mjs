export const name="identification-badge-duotone";
export const id="dl_57dbb77c478d498a9ce9";
export const url=new URL("../icons/identification-badge-duotone.svg?v=9c4934541b555dfe7a5d81b96ec06f804ef85e2440a6388457ef816946d97e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
