export const name="person-simple-swim-bold";
export const id="dl_b56006a5def845aea542";
export const url=new URL("../icons/person-simple-swim-bold.svg?v=c844eebf54e55dbd48630933f24a35598b5d6374d012a4f82e8061bee346825c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
