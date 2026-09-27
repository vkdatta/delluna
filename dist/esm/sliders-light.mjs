export const name="sliders-light";
export const id="dl_868382c32c866aca2ac2";
export const url=new URL("../icons/sliders-light.svg?v=8183487af4a961b8290403250a2161899101963b0600957489ad73f2c84b0969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
