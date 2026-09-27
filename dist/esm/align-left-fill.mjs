export const name="align-left-fill";
export const id="dl_e456f98b8c964c51bbdb";
export const url=new URL("../icons/align-left-fill.svg?v=fb5ac3e9eece6460428227cb47139305dbb12a6db4be98eb2ced3cac545e82d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
