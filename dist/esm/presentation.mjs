export const name="presentation";
export const id="dl_c7c185e6c5f74395847d";
export const url=new URL("../icons/presentation.svg?v=64d58acdd47d91545e158e43ee260cd03b298df6c4076900ff1bcc60403982c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
