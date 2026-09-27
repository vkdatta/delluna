export const name="udon-fill";
export const id="dl_ffdbfd04f793a9a8eeac";
export const url=new URL("../icons/udon-fill.svg?v=71b5788f69d34d1ef28e856e0cb3e48bef62e32397435ebb6c07bf00dbdb4eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
