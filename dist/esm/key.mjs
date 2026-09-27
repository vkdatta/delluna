export const name="key";
export const id="dl_3b735e5e29f09a25f339";
export const url=new URL("../icons/key.svg?v=561c4e663b4b63c3fa4c310a850225b91cc73311dec80a12a4b64cdd23d1b4d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
