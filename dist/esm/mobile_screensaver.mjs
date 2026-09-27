export const name="mobile_screensaver";
export const id="dl_84230b4a43e58eaafb75";
export const url=new URL("../icons/mobile_screensaver.svg?v=5322e190b9b6883f980a3b4a27bbe21acb784abd8c3b3b21595195e794ee6e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
