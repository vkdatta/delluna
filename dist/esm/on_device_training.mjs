export const name="on_device_training";
export const id="dl_f108dabf7bd739acb3c4";
export const url=new URL("../icons/on_device_training.svg?v=276d1fd88bcd958451579ca37d9870e502cc2552a72f7640daae721f588ec310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
