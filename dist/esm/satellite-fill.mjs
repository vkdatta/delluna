export const name="satellite-fill";
export const id="dl_ff9286890b85985227d4";
export const url=new URL("../icons/satellite-fill.svg?v=072bfb6cf565a4263793c406b0e77c7c744611f85d1c875f55fc7aa7caecb58e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
