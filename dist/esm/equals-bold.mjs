export const name="equals-bold";
export const id="dl_12d601e0726c44728950";
export const url=new URL("../icons/equals-bold.svg?v=d3b5b9645ff623969c72965c464673cd0727fb7df4155c0e6ab753e109e82353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
