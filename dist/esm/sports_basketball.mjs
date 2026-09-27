export const name="sports_basketball";
export const id="dl_4007bb12dcc60f30772b";
export const url=new URL("../icons/sports_basketball.svg?v=f4681919fc8e4910d9eed4dc530affee638bdfd3c7980d82df87b2a0a7ce9bbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
