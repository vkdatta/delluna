export const name="hash-thin";
export const id="dl_32030ee6f8fa45a99c0a";
export const url=new URL("../icons/hash-thin.svg?v=f96618ca5f58f5273fb63ee76b3436576da7fac1efffbe156ee6c2c63eacb008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
