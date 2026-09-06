export const name="flask-duotone";
export const id="dl_d491721033a94c8683c1";
export const url=new URL("../icons/flask-duotone.svg?v=3a2a8b78037461d9f85645bfdfc1164b3fe9d773e854fe034f96eab9c3494099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
