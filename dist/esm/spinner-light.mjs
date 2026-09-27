export const name="spinner-light";
export const id="dl_6d6ec8908a576d1aaf60";
export const url=new URL("../icons/spinner-light.svg?v=13bdb7af57698f25ee3f78d6140159edf4ffad9230598ca235ac07676b8d8de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
