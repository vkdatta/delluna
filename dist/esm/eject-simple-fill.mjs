export const name="eject-simple-fill";
export const id="dl_e7e0953d05dc42c18b5e";
export const url=new URL("../icons/eject-simple-fill.svg?v=f8aecfd39095098c2a41e67ae8d9af67e7d6297739b1d57716264a0f3730cb5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
