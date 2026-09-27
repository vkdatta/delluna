export const name="lucid_3-sport-shoe";
export const id="dl_fa084c329ea14673baa4";
export const url=new URL("../icons/lucid_3-sport-shoe.svg?v=d4773fbf8819a66b3b85deb57b199c4becde3f53943a587082b532cf70190d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
