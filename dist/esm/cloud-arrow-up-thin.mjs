export const name="cloud-arrow-up-thin";
export const id="dl_3b4ed474209c4d009191";
export const url=new URL("../icons/cloud-arrow-up-thin.svg?v=b47c69fbab00a774188ca231685964d730918c4d915c2688b3d98287a1748b74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
