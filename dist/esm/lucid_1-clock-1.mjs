export const name="lucid_1-clock-1";
export const id="dl_25228b02833f44f3bf8d";
export const url=new URL("../icons/lucid_1-clock-1.svg?v=4e377631adc3c5fdeea5ebe9b1823239f7aa9880841268eec5d17d6dd07144cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
