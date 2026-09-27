export const name="live_help";
export const id="dl_94e884ea1fbd23374825";
export const url=new URL("../icons/live_help.svg?v=498d6a4cd1372a8796bbe0ed923fb4a70c0a7e8dbf6235d9c5b986075eae83a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
