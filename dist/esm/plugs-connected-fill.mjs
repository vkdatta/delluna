export const name="plugs-connected-fill";
export const id="dl_48a46a0ea5d541ddb56b";
export const url=new URL("../icons/plugs-connected-fill.svg?v=b5ba30531c49a50e228ae81fb4df2e93fc3958b722cf7676fcc3c3738b6a1136",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
