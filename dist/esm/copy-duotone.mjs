export const name="copy-duotone";
export const id="dl_5c99c4d8d75748fa80bf";
export const url=new URL("../icons/copy-duotone.svg?v=fc73aa7b72885a5f36072549b7e636344a218a9e5c51dcb6a4ffd4cca0dca70c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
