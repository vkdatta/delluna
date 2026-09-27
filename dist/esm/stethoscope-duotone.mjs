export const name="stethoscope-duotone";
export const id="dl_7ac5bd5ff3e41ed5899a";
export const url=new URL("../icons/stethoscope-duotone.svg?v=194b1bd17d3f730a6c3c14da5808c3ea3f26957de23adf3257379b960c954f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
