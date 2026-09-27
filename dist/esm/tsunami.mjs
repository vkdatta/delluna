export const name="tsunami";
export const id="dl_1f4c7855448ee5a3ec22";
export const url=new URL("../icons/tsunami.svg?v=d4de6d95caca3a754854806cd065bea32989330203f90001617e66848a8e1c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
