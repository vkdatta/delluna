export const name="butterfly-thin";
export const id="dl_459325d906fe42c8b881";
export const url=new URL("../icons/butterfly-thin.svg?v=2a27559af0e93b5c44a12860ae4db3b7e8fe2a325fd83e96d818c5dd61e5cab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
