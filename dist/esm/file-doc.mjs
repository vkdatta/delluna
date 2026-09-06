export const name="file-doc";
export const id="dl_779bb313acd64f3eb2d6";
export const url=new URL("../icons/file-doc.svg?v=ec073e50e98aa0ead5e346c178062629ced81e531c413e7239ee209600a593a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
