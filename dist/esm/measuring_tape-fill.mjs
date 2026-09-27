export const name="measuring_tape-fill";
export const id="dl_6ef2f9c28704926a9685";
export const url=new URL("../icons/measuring_tape-fill.svg?v=b9a9c380bae9ca34cbf3bf41c44501368250b5398b557527820639b84e03583b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
