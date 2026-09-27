export const name="moped_package";
export const id="dl_40414397f6683532928d";
export const url=new URL("../icons/moped_package.svg?v=48a0a7f764504276a7480ef200f1d62ade0c4532f2de82cd85779839fed1ae08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
