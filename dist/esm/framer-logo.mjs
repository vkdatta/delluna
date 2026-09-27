export const name="framer-logo";
export const id="dl_756cd161b97d4213a0e1";
export const url=new URL("../icons/framer-logo.svg?v=fbed3128b240f6e0e9ae4859692b2f0741f795eb943997cbc61c23e60becc27d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
