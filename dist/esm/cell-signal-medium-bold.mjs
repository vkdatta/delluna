export const name="cell-signal-medium-bold";
export const id="dl_880cffcedc124c5ca575";
export const url=new URL("../icons/cell-signal-medium-bold.svg?v=6b013074e0c57cd64093a8282534937eba4f342e79634f57a0eea42b9db0035d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
