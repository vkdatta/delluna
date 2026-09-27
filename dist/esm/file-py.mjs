export const name="file-py";
export const id="dl_19441fc0aab54a1fa054";
export const url=new URL("../icons/file-py.svg?v=3ccee9fff718d0710f48da784891444a52538e86c6a7c615e9d30a786afedac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
