export const name="photo-fill";
export const id="dl_548d5537f0cba546ad8b";
export const url=new URL("../icons/photo-fill.svg?v=3af7b85432a929e5a6b9c45b9795c404477a8f2a5561219a99b375b9babf808d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
