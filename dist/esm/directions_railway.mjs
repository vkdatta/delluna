export const name="directions_railway";
export const id="dl_7732cd2eb34247fab6cf";
export const url=new URL("../icons/directions_railway.svg?v=4061f086033125132f343306b215ad765c22f5d001944c1805e43ff0a200a554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
