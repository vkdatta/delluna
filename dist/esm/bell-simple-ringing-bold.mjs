export const name="bell-simple-ringing-bold";
export const id="dl_4b8e188e6ff3402fab05";
export const url=new URL("../icons/bell-simple-ringing-bold.svg?v=d9cb382c95ed94788a9ddaad0fdacb217a94cd412c7f512c9d0b48de75ff984b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
