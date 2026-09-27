export const name="lucid_2-kayak";
export const id="dl_ca1fd80f00364880af79";
export const url=new URL("../icons/lucid_2-kayak.svg?v=adc27aa48ae5838d5fb13ac08cf50e1a65660174d899e8cee16fcf637241dd83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
