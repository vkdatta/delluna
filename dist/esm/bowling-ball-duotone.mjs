export const name="bowling-ball-duotone";
export const id="dl_6d968496d4db4701909f";
export const url=new URL("../icons/bowling-ball-duotone.svg?v=fc667b50a5b41c523f62ade95c83734c533332e2d66dbcbe3c7b1b9e9974857f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
