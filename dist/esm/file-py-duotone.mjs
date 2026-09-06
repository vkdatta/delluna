export const name="file-py-duotone";
export const id="dl_c4fa501f0ff344e69c7d";
export const url=new URL("../icons/file-py-duotone.svg?v=7773a9535cd56ccc490856bcbd821d8cfdaac60e965f9d661709f79b2fa3fc9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
