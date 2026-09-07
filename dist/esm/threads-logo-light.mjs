export const name="threads-logo-light";
export const id="dl_8fa06d3f51e748bd880e";
export const url=new URL("../icons/T/threads-logo-light.svg?v=a8700fff3396c8aa88ca480b4ca3c567369abb86104c06f44803dda18304263d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
