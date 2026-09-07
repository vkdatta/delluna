export const name="user-circle-check-duotone";
export const id="dl_407f659e74ff481c96e0";
export const url=new URL("../icons/U/user-circle-check-duotone.svg?v=392f7faa36e584dd3491b89003adf9995aca4be08a0411b8d6ed49df20699a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
