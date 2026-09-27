export const name="file-image-thin";
export const id="dl_d66c4f65e8174a8082e0";
export const url=new URL("../icons/file-image-thin.svg?v=e030fc958834ac3a6906668832bea645674348da7a9d51bfbb8bb45cbc7a022a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
