export const name="ear";
export const id="dl_fff9db7e9a8243bb8c55";
export const url=new URL("../icons/ear.svg?v=8d9849416602c67db03ad3069cd7cfc6ff3b03bd115af7837f161d2c07379dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
