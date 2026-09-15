export const name="face_6";
export const id="dl_9cf30ce87e6a49ab9108";
export const url=new URL("../icons/F/face_6.svg?v=38317722145fe948ae49d4828a5ddfd0d01027df9c2acf03c3491ab475c8d6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
