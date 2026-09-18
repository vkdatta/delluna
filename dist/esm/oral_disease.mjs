export const name="oral_disease";
export const id="dl_09bd5d0952f34e1ab265";
export const url=new URL("../icons/O/oral_disease.svg?v=e7b2304d526d38ab852a121c380e0a07bf177178e13f26a67bd11450cb0e659b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
