export const name="lucid_1-beef";
export const id="dl_163f5b41330a4681a94a";
export const url=new URL("../icons/lucid_1-beef.svg?v=79ad311c9ec9b5af97145ca47bd84f10a7eff902f8c78c33ab171f91f1ccc382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
