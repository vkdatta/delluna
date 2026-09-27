export const name="subheader";
export const id="dl_a88b653440b66dcb31c7";
export const url=new URL("../icons/subheader.svg?v=576bface78f4953e85697f54ad00a6b49c65f694563f578a9e57a63bbf8b640d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
