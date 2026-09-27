export const name="file-cpp";
export const id="dl_a195332a4ccb42d9bb3f";
export const url=new URL("../icons/file-cpp.svg?v=6cdfe19269837eb21bf853651fa63227364b0b803a2e1f0a834710fb3dc8aae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
