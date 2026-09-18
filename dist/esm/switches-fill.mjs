export const name="switches-fill";
export const id="dl_cc920901f2004014a49a";
export const url=new URL("../icons/S/switches-fill.svg?v=d740fbab10b820c572edb9720534ec0e6d5bf900a18d6a7ea29196e606c30ee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
