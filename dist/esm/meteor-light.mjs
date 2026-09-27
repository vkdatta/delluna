export const name="meteor-light";
export const id="dl_89da0554414c4fa1834c";
export const url=new URL("../icons/meteor-light.svg?v=4016a158d8151f02645f918c9957c46a2fe70ae8d1f495eac6918f67b16ccc97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
