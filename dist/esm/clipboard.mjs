export const name="clipboard";
export const id="dl_6e6688875bbf423e9c23";
export const url=new URL("../icons/clipboard.svg?v=98106d5e70e0c865455c0bfb86d779c2897fa8e55112783880d1ca5d491fd77e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
