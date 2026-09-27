export const name="broom-thin";
export const id="dl_4a5ef5f7be3144f9992b";
export const url=new URL("../icons/broom-thin.svg?v=319e4af5921c76c10e7c46b03e9e0d4c75db0688390a5702dd5d8567eb658055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
