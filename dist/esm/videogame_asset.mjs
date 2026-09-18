export const name="videogame_asset";
export const id="dl_4cad6e2e5b914d8185a1";
export const url=new URL("../icons/V/videogame_asset.svg?v=3af0321157d20551430a51985257f43e5b207d9652a22286d6335b65e2f41ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
