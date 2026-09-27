export const name="6k";
export const id="dl_10e1b8043258ab57d97b";
export const url=new URL("../icons/6k.svg?v=dd5ae0a526cdc3d520ee600d35ee2e56f570c91427ecf3935e01b0cadbeaa6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
