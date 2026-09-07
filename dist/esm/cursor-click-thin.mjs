export const name="cursor-click-thin";
export const id="dl_7f0081dbf81049598671";
export const url=new URL("../icons/cursor-click-thin.svg?v=396a821c9139691c51dc0f0fb735b78698d645c922fd8182db3bb51e2ea76750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
