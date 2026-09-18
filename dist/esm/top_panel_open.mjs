export const name="top_panel_open";
export const id="dl_3002bd3bc4b64e8e9081";
export const url=new URL("../icons/T/top_panel_open.svg?v=168ca68405ec540153562f58bdf9516446170f269a56f6a93e9f8bc31a26f981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
