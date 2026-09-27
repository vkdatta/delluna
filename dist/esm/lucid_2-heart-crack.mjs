export const name="lucid_2-heart-crack";
export const id="dl_89dd663eccc44f4c8fd0";
export const url=new URL("../icons/lucid_2-heart-crack.svg?v=7f693b6a94f5fa48f71c8da405c0726a4538070d19440849ca23ae9590922750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
