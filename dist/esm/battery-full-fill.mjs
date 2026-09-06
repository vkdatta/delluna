export const name="battery-full-fill";
export const id="dl_cfe0ac948cc34e0d90ee";
export const url=new URL("../icons/battery-full-fill.svg?v=f47c507c229dfb4a90f5d58b3aaa98abcb83a75ff47014a6951d38443ebaf049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
