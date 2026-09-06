export const name="network-slash-light";
export const id="dl_84c316f0f1bd4d318ba9";
export const url=new URL("../icons/network-slash-light.svg?v=9717ded8561611c404cd1ae464af97b8af60fb4a4bc47bddac20c4dfcca1b963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
