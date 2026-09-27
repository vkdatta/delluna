export const name="keyboard_off";
export const id="dl_0f9251e2f56d6928d628";
export const url=new URL("../icons/keyboard_off.svg?v=36eb841381fd4555431f425fa3a78546ab96db07d5fda7817649fe4f940d081f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
