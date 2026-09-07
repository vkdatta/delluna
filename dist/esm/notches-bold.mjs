export const name="notches-bold";
export const id="dl_43df5b95c37a4844aa88";
export const url=new URL("../icons/notches-bold.svg?v=c9878fb349f4f86716d0535617229b9fa57d07ce0d5501bff26f56de5999c7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
