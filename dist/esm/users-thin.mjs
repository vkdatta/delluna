export const name="users-thin";
export const id="dl_257daf4eb6d6c0baf698";
export const url=new URL("../icons/users-thin.svg?v=79271092743dff0aaa49189ae8a655bfbdb5f4c012c79443932f7aa82bdc6308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
