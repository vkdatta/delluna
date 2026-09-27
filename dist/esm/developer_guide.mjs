export const name="developer_guide";
export const id="dl_ef52b1f75d49d20f5c7d";
export const url=new URL("../icons/developer_guide.svg?v=562f528a6a3642673d59bf86216fc9fe77b3d5de14c04522b1dca6db3356b961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
