export const name="chair_fireplace-fill";
export const id="dl_7e83bf2d5cd743f5900d";
export const url=new URL("../icons/C/chair_fireplace-fill.svg?v=0345dec41e7403c474ed6e94981b39f44065f6c19875b507468056176f891354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
