export const name="arrow-circle-left-bold";
export const id="dl_387568d167074018a82d";
export const url=new URL("../icons/arrow-circle-left-bold.svg?v=fcd5f81b0d1c708d01d4b8411efa67b379f606c692e6db15cb44cd36e9ae035e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
