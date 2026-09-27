export const name="square-equal";
export const id="dl_84f69252e35e4826ac61";
export const url=new URL("../icons/square-equal.svg?v=9af4cb8b9671b72127416ae8d19ad3c2f889ce6e4bdf9d337dce8dbd02cfacf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
