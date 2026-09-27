export const name="sword-thin";
export const id="dl_01ce6e84b16b110683c6";
export const url=new URL("../icons/sword-thin.svg?v=03264f45a2f49961893a92eb9ac14b2e81721f94283abbfedf819648a656c54c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
