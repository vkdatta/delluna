export const name="arrows-in-cardinal-light";
export const id="dl_6d46af38b94745f29a8f";
export const url=new URL("../icons/arrows-in-cardinal-light.svg?v=b7d38f0c9886ac6c09b848d7279fbce2eb104f78b20565680334c4fe2f6360b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
