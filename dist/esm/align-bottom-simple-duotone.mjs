export const name="align-bottom-simple-duotone";
export const id="dl_7fd1fb5c28f341db828e";
export const url=new URL("../icons/align-bottom-simple-duotone.svg?v=a21d0b41d0e7ea55092166cab38c02f121cb692f1a4917cbd0ab79a12b1f4b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
