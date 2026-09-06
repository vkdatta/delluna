export const name="handbag-simple-light";
export const id="dl_1d850e04067c454bba78";
export const url=new URL("../icons/handbag-simple-light.svg?v=1fa8cf287065be133fff2c37384f6cf4d4428145742074248666b0b27499efc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
