export const name="jar-label-thin";
export const id="dl_7254f3bb36f8475ba35e";
export const url=new URL("../icons/jar-label-thin.svg?v=b22d79d936f4906449d2f8c2c940342d74c0b47a225d24e5d31b0fa36da9e4db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
