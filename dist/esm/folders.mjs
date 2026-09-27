export const name="folders";
export const id="dl_f487e11c39dd4d54907c";
export const url=new URL("../icons/folders.svg?v=f401caaff9b5332c1014b2bc8d5e640be50cfb1113fa29835431f7111062d471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
