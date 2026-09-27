export const name="arrow-circle-up-left-duotone";
export const id="dl_be957132148c4334b731";
export const url=new URL("../icons/arrow-circle-up-left-duotone.svg?v=88c54f35df1f416751b85606ab048f65a8f464777485c8e5e5e83b504dc63948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
