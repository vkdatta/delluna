export const name="text-underline-thin";
export const id="dl_0895e83e951890572696";
export const url=new URL("../icons/text-underline-thin.svg?v=4c96aeb4fac29437194c71b0e17007a69591edd74dd64c3778344f9e641e6f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
