export const name="rainbow-light";
export const id="dl_0d779a327de04401898b";
export const url=new URL("../icons/rainbow-light.svg?v=3643dddab9fdee5582838941398ebf9142988dd2cb5adfb6657e8ce4c922a702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
