export const name="lego-bold";
export const id="dl_bd2068ce85ff43ab82b8";
export const url=new URL("../icons/lego-bold.svg?v=d5cb038431904d5af97ee7e188a982c14cec752edaba8c403f791db6557afb11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
