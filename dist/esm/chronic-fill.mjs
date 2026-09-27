export const name="chronic-fill";
export const id="dl_eb6cb6cf828767112243";
export const url=new URL("../icons/chronic-fill.svg?v=4012c1a47f79bb60dde5620de7bec6a0e22a263922a918b4193cec88ba09b723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
