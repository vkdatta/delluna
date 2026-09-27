export const name="crown-simple";
export const id="dl_f8bf7087f323477b8eb0";
export const url=new URL("../icons/crown-simple.svg?v=a0061e47a28331510621f5d93567028a5dad7d78cb87abb5fe501e4817967cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
