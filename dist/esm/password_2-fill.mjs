export const name="password_2-fill";
export const id="dl_c39f5eed25bdf6710e6b";
export const url=new URL("../icons/password_2-fill.svg?v=a074ac185339b700c42a37d447689e6c5ca2855cdca6db38429caf629a257042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
