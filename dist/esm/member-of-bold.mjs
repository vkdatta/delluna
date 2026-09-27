export const name="member-of-bold";
export const id="dl_0cd7397c7b21423c902a";
export const url=new URL("../icons/member-of-bold.svg?v=a5bdbf9ca346b7a3c3a7a0bde41c1753f2bd012709a4759fdc90b5d429b50cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
