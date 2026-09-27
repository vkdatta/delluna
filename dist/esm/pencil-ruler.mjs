export const name="pencil-ruler";
export const id="dl_0b3bc40120e34af7804c";
export const url=new URL("../icons/pencil-ruler.svg?v=f5ae5d3402f3c62d80a1672b70481b5d0c3e135bb67c6acc6e93403798346043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
