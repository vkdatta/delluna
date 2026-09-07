export const name="umbrella-simple-thin";
export const id="dl_2262b7b52fb04af38754";
export const url=new URL("../icons/U/umbrella-simple-thin.svg?v=a49614a5bb46223a1cd7198ca6869fcb0bba1aa688e2c5451d925e8f8e54a42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
