export const name="bug";
export const id="dl_44dbff2f81d74df69e6d";
export const url=new URL("../icons/bug.svg?v=484dd7458d46d2b5fda34afa2166b56e88efe9edf51e8f1b9d326e262225818b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
