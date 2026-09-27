export const name="shift_lock";
export const id="dl_b4d64358661180ba4b31";
export const url=new URL("../icons/shift_lock.svg?v=bbdc3c64582800111cab9f343517454bd380c264af3c6007fad740e64678a2e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
