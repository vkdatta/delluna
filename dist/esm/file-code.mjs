export const name="file-code";
export const id="dl_549a5e6418b94419b742";
export const url=new URL("../icons/file-code.svg?v=bc4677a2ee40439c35c3e3fe94eedf3ffa7db10b1c7863e97ef3f9258a76a636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
