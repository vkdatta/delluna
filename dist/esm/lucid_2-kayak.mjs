export const name="lucid_2-kayak";
export const id="dl_ca1fd80f00364880af79";
export const url=new URL("../icons/lucid_2-kayak.svg?v=46ba8dd94c8c743d10d7c1b429b521955e9ae5e00f109db847930f8a3ca0bcce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
