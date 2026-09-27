export const name="record-light";
export const id="dl_66f9adab8f6c4153bc23";
export const url=new URL("../icons/record-light.svg?v=1864c8828f24d960fc6d1b8cba54edb8df7a44e47702991e674a7a8e284d063c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
