export const name="piano-keys-light";
export const id="dl_48600ae8120c4a6bba6a";
export const url=new URL("../icons/piano-keys-light.svg?v=4bc70c689a9d010100cc10900e8fda8ce28dd98d2fb5a54dcbdd13db0f32ffc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
