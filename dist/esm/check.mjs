export const name="check";
export const id="dl_5908cb5a33b24c738a18";
export const url=new URL("../icons/check.svg?v=9a359839957936f32190e67f0f6e66ee611718707c496954259d28be90ff49e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
