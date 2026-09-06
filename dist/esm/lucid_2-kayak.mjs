export const name="lucid_2-kayak";
export const id="dl_ca1fd80f00364880af79";
export const url=new URL("../icons/lucid_2-kayak.svg?v=04faac8b3f4cf78465acddbfab0c11463ad40044d3642a3b83742b3acae8604d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
