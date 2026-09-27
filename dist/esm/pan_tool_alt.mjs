export const name="pan_tool_alt";
export const id="dl_d0f812288cbe014f84a5";
export const url=new URL("../icons/pan_tool_alt.svg?v=806a1916a8493b7ce743ef494209b72781f6147aff75a02beb2d1a6fd7a2713d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
