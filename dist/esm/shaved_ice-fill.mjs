export const name="shaved_ice-fill";
export const id="dl_af562e6b73e198a446c0";
export const url=new URL("../icons/shaved_ice-fill.svg?v=6ceb666eedb96579b17fd1e57d7cef254eac2588b7cb40edb648043772ac76a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
