export const name="masks-fill";
export const id="dl_552577dc7fd54276aba8";
export const url=new URL("../icons/M/masks-fill.svg?v=467e30905a4afe66e23716e7908be547c1dbfc3f26458f2d3cdeeb37ca7dea4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
