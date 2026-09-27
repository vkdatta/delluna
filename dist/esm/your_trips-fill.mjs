export const name="your_trips-fill";
export const id="dl_930415e94ff5ca252d27";
export const url=new URL("../icons/your_trips-fill.svg?v=42d4ae3e2464f26e8b5b4c23d7c63ccb390ec5c45947996495d52e943fdd29ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
