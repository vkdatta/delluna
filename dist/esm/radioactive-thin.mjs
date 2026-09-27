export const name="radioactive-thin";
export const id="dl_39c2ad53ca5b433ebd5b";
export const url=new URL("../icons/radioactive-thin.svg?v=88deb164d27cb7664720f28f3c1130d0bfd8b82ffecdb29148e11b519cfd7fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
