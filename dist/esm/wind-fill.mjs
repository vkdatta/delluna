export const name="wind-fill";
export const id="dl_c3750f30e93142998d25";
export const url=new URL("../icons/W/wind-fill.svg?v=8846cc76adeb51cd26db6066b9a85b40ade9566903bccf9499d98d75604839ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
