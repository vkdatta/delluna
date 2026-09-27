export const name="av1";
export const id="dl_a65f40fddb065915848b";
export const url=new URL("../icons/av1.svg?v=893e888f455bd008de879d4f41ab825746077d18d0ae85651379b9d4bb79f479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
