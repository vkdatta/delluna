export const name="share-duotone";
export const id="dl_53242c7b7fad56d1dbed";
export const url=new URL("../icons/share-duotone.svg?v=18b3ddc88c87b839f4ab958261d67cc96f718b0c9bae0b3c7e2c8df809945ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
