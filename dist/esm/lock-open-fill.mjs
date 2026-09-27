export const name="lock-open-fill";
export const id="dl_cb5a21f1cffb4aeababa";
export const url=new URL("../icons/lock-open-fill.svg?v=40e9217a9f27cea145cc95e46c2a20f1d7ea49bc680e6d5fff8652e5c7755b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
