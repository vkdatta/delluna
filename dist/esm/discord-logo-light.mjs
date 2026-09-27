export const name="discord-logo-light";
export const id="dl_df0e4e3c0aff41699b89";
export const url=new URL("../icons/discord-logo-light.svg?v=cc7c8a08835c3a02d93a94fc3d5244af77493f20e01508683a446a618bd8c2b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
