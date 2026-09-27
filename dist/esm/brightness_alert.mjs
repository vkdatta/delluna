export const name="brightness_alert";
export const id="dl_31ee4af6e4c0529ccd6c";
export const url=new URL("../icons/brightness_alert.svg?v=9a2016230afcd0e16e385b5e9771d5aa00dc2bec87c23aa6eae0fd8658ba39ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
