export const name="browsers";
export const id="dl_8aa9ae5dd68e45acb1a4";
export const url=new URL("../icons/browsers.svg?v=e01384ff911bcdd3a78cefd95d4bd32013b532a0504a66b31a5339c080e4cdc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
