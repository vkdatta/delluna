export const name="person-simple-run-light";
export const id="dl_27aee27f5f9f4ecc846c";
export const url=new URL("../icons/person-simple-run-light.svg?v=dc1b5afb17820b918d3915426aca6133d071bf4f4b887fcf447f4f74169b8749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
