export const name="x-bold";
export const id="dl_26ee0301da8ea162b684";
export const url=new URL("../icons/x-bold.svg?v=ff751fd009b864c0061289ce0c61342c8e83fd2cc0a431adbbda39fcbd37e13a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
