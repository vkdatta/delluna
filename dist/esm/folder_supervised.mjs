export const name="folder_supervised";
export const id="dl_53e9de111d9ceb54e509";
export const url=new URL("../icons/folder_supervised.svg?v=f9db8491b93f8111a7e201e50bb961d961e8dc87cbf1e0a4a9e833a0a78de37a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
