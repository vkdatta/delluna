export const name="file-ts-fill";
export const id="dl_00403688826744e8af0d";
export const url=new URL("../icons/file-ts-fill.svg?v=499a891ab12d0da3600c65b0eef2bb8d6268e4863c0e56ef89761de9963fe83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
