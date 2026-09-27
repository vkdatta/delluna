export const name="server_person-fill";
export const id="dl_1240c2a25935afd085e5";
export const url=new URL("../icons/server_person-fill.svg?v=47347b74b06d3058adb6e8344e70bb15c06fe289019bc7dcccc88f1ea817006d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
