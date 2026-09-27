export const name="air-traffic-control";
export const id="dl_35a8bbcf905240069c1b";
export const url=new URL("../icons/air-traffic-control.svg?v=e9acf33c0131d86dc7d05570cf1bbaa471c6838b4d936adfabac3e2bca0bbacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
