export const name="palette-light";
export const id="dl_9213e1905d0642818328";
export const url=new URL("../icons/palette-light.svg?v=d34f4df3b7cde9b41c93f0efacc0fdbb60fbad561684bffebef9c6d166087e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
