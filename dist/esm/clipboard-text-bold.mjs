export const name="clipboard-text-bold";
export const id="dl_7b0182659dff49089bce";
export const url=new URL("../icons/clipboard-text-bold.svg?v=275c5b0c7c860044eb1897bbabecead26861689868b8a6c7f9687b5027d6a095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
