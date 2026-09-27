export const name="google-chrome-logo-duotone";
export const id="dl_0a966e6d16fd400bb0ea";
export const url=new URL("../icons/google-chrome-logo-duotone.svg?v=d3d4b5cda6365469810b5cf709887e8424a954e9947b85a078e6c492cfd0aba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
