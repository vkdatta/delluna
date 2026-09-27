export const name="tsv-fill";
export const id="dl_9be33f7b4b47dd15d32e";
export const url=new URL("../icons/tsv-fill.svg?v=5d71583b3e7082687ff07ebda794833ec2111f4d45a2fa4214d5e0f8f4d5aeb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
