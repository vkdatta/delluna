export const name="toggle-left-bold";
export const id="dl_652df6c5b96d4282ab2c";
export const url=new URL("../icons/T/toggle-left-bold.svg?v=367d51df4bda2c7472d0b8a46080b723bebb81de8b6fe1060f3e46edd14a598b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
