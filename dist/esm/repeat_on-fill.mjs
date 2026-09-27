export const name="repeat_on-fill";
export const id="dl_860533d61f0604cd0a82";
export const url=new URL("../icons/repeat_on-fill.svg?v=6a1ef15b8ed48ba3efa55caf6e6a1e2881a37a8d9a273968e8b48ff6860254af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
