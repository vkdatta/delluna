export const name="punch_clock-fill";
export const id="dl_68dd79f1fc8a45af5ed9";
export const url=new URL("../icons/punch_clock-fill.svg?v=4e24114ef51f8c0bfcf407470854aec91978654115beedacb7a0810010052c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
