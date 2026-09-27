export const name="keep";
export const id="dl_8f4dc27725ba594cfe53";
export const url=new URL("../icons/keep.svg?v=3dcb7c80a63cd5bbfeee582ea98c87790257f43a49f9fe29720009e0c9c59c6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
