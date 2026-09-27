export const name="spinner";
export const id="dl_f0b6c6de2ff4511aedf1";
export const url=new URL("../icons/spinner.svg?v=4a862b71d224c891d27d1ae71f5bcd6dbc08b4ea11c8bbd95e8a45e229d7189b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
