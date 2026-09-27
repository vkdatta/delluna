export const name="circle-thin";
export const id="dl_a59656e84a9f484dbd98";
export const url=new URL("../icons/circle-thin.svg?v=fdb31ab0108355f5a36767b415354a553c81ebfde0cfa2e55bb42e832d7c1308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
