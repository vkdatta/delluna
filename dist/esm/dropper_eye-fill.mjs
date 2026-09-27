export const name="dropper_eye-fill";
export const id="dl_e3dcb1e6a30c0c68503c";
export const url=new URL("../icons/dropper_eye-fill.svg?v=d4ff8b83e9ef5d6adc9b22b9dddc0af970b54a02eaabd4a516433977d85842b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
