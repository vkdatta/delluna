export const name="grid-four";
export const id="dl_d1b891ca45c34397a9d4";
export const url=new URL("../icons/grid-four.svg?v=63f4e721e8f9ea49d5f776f10c513157170615ce3d2aa44f26a7ab7a1f7dcaff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
