export const name="spo2";
export const id="dl_06e06f21b622f8f63847";
export const url=new URL("../icons/spo2.svg?v=8bcbe63c8f1b5d964e08ee4c799f7c6ac752220d75193ea6a07131bee06b5a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
