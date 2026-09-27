export const name="altitude";
export const id="dl_11b18bf952d72c32c926";
export const url=new URL("../icons/altitude.svg?v=01f0db3ba47370f7deb2058cfc36ab7a8bb1ee276324193a0b5d1b83a60fb5c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
