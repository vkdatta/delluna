export const name="dots-three-vertical-thin";
export const id="dl_d43e8cedc35446dba2bc";
export const url=new URL("../icons/dots-three-vertical-thin.svg?v=868ba9499f1b7967140f39bf87b5d9956015b4ad0df73ffcef5a53f19f1f9ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
