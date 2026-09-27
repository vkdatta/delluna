export const name="lucid_2-heart-crack";
export const id="dl_89dd663eccc44f4c8fd0";
export const url=new URL("../icons/lucid_2-heart-crack.svg?v=9c5d8ca176a73f3b39065d38ffb728324720f2cf3fd6e05105dfffba39143a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
