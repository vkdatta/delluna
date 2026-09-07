export const name="speaker-slash";
export const id="dl_c8b46a4f066b452c8a6a";
export const url=new URL("../icons/S/speaker-slash.svg?v=66b75267ea8ba8759a70e4c8312bfe06b834fc8fcf0dd1710d9819877f0c8013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
