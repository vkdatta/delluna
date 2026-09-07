export const name="slack-logo-thin";
export const id="dl_0f52b55c816740aea407";
export const url=new URL("../icons/S/slack-logo-thin.svg?v=d74c716d3729053292597f26e0d83de0776fa8b03105d3d5c84839f11ae8d511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
