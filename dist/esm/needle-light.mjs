export const name="needle-light";
export const id="dl_b3f980bc8dd44790a9ca";
export const url=new URL("../icons/needle-light.svg?v=9ff639f6304b46c10d529f32f5114385f95e9a32c7ed1ab8db52efc61baf2c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
