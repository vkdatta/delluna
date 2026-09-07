export const name="tree-light";
export const id="dl_cb872e18396d43eea102";
export const url=new URL("../icons/T/tree-light.svg?v=3f69a1db621e5efe02084b3dde8b838c9c3dfc9c92d1a98ce8c49fa31664a3af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
