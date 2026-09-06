export const name="zodiac-leo";
export const id="dl_44cbdff2a3f4407391cb";
export const url=new URL("../icons/zodiac-leo.svg?v=6581ae37b71bb8e692cfe34afcaf934a8a25c2906f16782c914fa21e628b9e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
