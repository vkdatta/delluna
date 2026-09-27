export const name="face_6";
export const id="dl_00a58d02bbe4ca10c379";
export const url=new URL("../icons/face_6.svg?v=68455b05bf132804c1813c1fbc6d571838badb5c6ef49b57eb02e4d9a664239a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
