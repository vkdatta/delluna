export const name="hard-drive-light";
export const id="dl_01929401c26a47dd916e";
export const url=new URL("../icons/hard-drive-light.svg?v=69ed1ee6e52377d1917f075c88e587e7530b071fba1c961326da09174db3f6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
