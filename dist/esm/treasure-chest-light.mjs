export const name="treasure-chest-light";
export const id="dl_bbc363dda5244ac3822c";
export const url=new URL("../icons/T/treasure-chest-light.svg?v=445d4673414526f49e93371a676767e31cab43966330f10ddeadef648db4b164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
