export const name="test-tubes";
export const id="dl_2b1a2a69c29f4ec68503";
export const url=new URL("../icons/test-tubes.svg?v=4c7064ddab5b727d7ff50e7038e0e986eb1d71d38e24b57fe95dcc34726b4f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
