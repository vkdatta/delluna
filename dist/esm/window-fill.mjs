export const name="window-fill";
export const id="dl_6ed718512b3534ae46e8";
export const url=new URL("../icons/window-fill.svg?v=ff18e447b9784597dbded24b5f1486d7644c610d10c60dfa70e4627fd3929bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
