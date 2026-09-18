export const name="pulse_alert";
export const id="dl_47357cc8385f4ccf8124";
export const url=new URL("../icons/P/pulse_alert.svg?v=a14da1a56949068e6f5306552e33853eeaded856713a457b0267c138028ca82f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
