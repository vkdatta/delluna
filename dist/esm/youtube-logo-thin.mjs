export const name="youtube-logo-thin";
export const id="dl_58f7ce318e7e23fd827c";
export const url=new URL("../icons/youtube-logo-thin.svg?v=665eb794d1ff52ae23e12b5197c795c569b9bf1bdf4c10c90d8760761741f868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
