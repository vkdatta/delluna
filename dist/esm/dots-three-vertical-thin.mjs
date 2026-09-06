export const name="dots-three-vertical-thin";
export const id="dl_d43e8cedc35446dba2bc";
export const url=new URL("../icons/dots-three-vertical-thin.svg?v=4b8f8bda9b23a3912ee012282931adbb4991799537a00f38caf5fe3e0fac8fa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
