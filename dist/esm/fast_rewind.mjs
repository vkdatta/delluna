export const name="fast_rewind";
export const id="dl_ba15f419cf36be2e5335";
export const url=new URL("../icons/fast_rewind.svg?v=9b4b373ad2136d9b1e866597c9470edbb541a55b68c6b9e78e2714a6222eb2f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
