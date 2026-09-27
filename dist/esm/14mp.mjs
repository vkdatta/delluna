export const name="14mp";
export const id="dl_66ba81001a7140e71f74";
export const url=new URL("../icons/14mp.svg?v=9b1b951871f6e070f80af6f94bb155ca38e3ee367387aa5164d8d9dc0ded74c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
