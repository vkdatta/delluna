export const name="approximate-equals-thin";
export const id="dl_0d2522487d124d5ebd3f";
export const url=new URL("../icons/approximate-equals-thin.svg?v=604bc04bde22159ef1273532de238376c672f470b670bb81321a46408f220fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
