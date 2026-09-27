export const name="speaker-simple-low-bold";
export const id="dl_71ba6de6e17cdb489057";
export const url=new URL("../icons/speaker-simple-low-bold.svg?v=df7c18e16a7bb4279bc18a580b25fa868fe438e7227bdf892086e61b91bde4f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
