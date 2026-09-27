export const name="person_off-fill";
export const id="dl_fbfb137ba42101a7ead2";
export const url=new URL("../icons/person_off-fill.svg?v=e3afbca86b9db87a54aad09fac6fce54977893826d6baffc0742d549344938e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
