export const name="target";
export const id="dl_09728341e10748039908";
export const url=new URL("../icons/T/target.svg?v=7a99698f0610001a199629de58b8df97f67020a65c808ab4af1969a6cc0142d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
