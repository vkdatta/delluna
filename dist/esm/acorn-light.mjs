export const name="acorn-light";
export const id="dl_0ff8beb2e0c441f2b532";
export const url=new URL("../icons/acorn-light.svg?v=b5a163aca312b8e44d8594280b6e1f6f0c814536d74243d1ea7bd8725f50cc30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
