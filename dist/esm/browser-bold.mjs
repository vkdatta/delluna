export const name="browser-bold";
export const id="dl_cab50d3192164c6a8a34";
export const url=new URL("../icons/browser-bold.svg?v=af83b8bd83ac40b60ff12cbb31c5c2dab6f1681bcc6d933f098b09a9e369495f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
