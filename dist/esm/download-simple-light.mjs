export const name="download-simple-light";
export const id="dl_c840de55f3684ed9ab80";
export const url=new URL("../icons/download-simple-light.svg?v=4479ef636f40a0d218387f8fc734d708425307f3def2d4e8d14f33c9cda7631f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
