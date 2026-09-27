export const name="bell-ringing-bold";
export const id="dl_442fbe9ce9fc4feaa76a";
export const url=new URL("../icons/bell-ringing-bold.svg?v=dfffaee3310a150c49ad9d49bcf88d65240e2a3ae744e6e9487a376e59d35eab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
