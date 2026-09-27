export const name="face_5";
export const id="dl_97a97e7d8ddb8645054b";
export const url=new URL("../icons/face_5.svg?v=2be8aaeff9e3b94ff741b91a5c8944b6c6355cf3262200c8e62839832375425d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
