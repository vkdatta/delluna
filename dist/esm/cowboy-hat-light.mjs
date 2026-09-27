export const name="cowboy-hat-light";
export const id="dl_f965bbe9d1654c1380b3";
export const url=new URL("../icons/cowboy-hat-light.svg?v=5423c6b9c32eca4604b1cd79d269a9974332c87f7932a49b227255790fca4e85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
