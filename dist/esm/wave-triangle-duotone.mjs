export const name="wave-triangle-duotone";
export const id="dl_78033d016f209b1cf50f";
export const url=new URL("../icons/wave-triangle-duotone.svg?v=e84c30e83df98f334bb896823e3e72cf394fabce869a1011365aaa6cb505bee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
