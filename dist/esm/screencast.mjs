export const name="screencast";
export const id="dl_f57e0afe7df25b3e48e9";
export const url=new URL("../icons/screencast.svg?v=7d10c7070bd7472030c006ccb4e2ae5bd7379be8640a632eadf8c16ae73548d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
