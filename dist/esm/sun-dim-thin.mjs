export const name="sun-dim-thin";
export const id="dl_ab3bfbabafa4b84968f8";
export const url=new URL("../icons/sun-dim-thin.svg?v=8a26a92f13835271e5d2dad6d2568a20c2f99104482196a83010ad868818dc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
