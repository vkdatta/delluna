export const name="folder_managed";
export const id="dl_1ddad7e22d395e5b1010";
export const url=new URL("../icons/folder_managed.svg?v=4e2ced8ed28e285c449f7f56a40b8b80724932922afb4d80564e0ebe28548214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
