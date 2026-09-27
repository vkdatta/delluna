export const name="speaker_3";
export const id="dl_ec3ab2af7384af693d93";
export const url=new URL("../icons/speaker_3.svg?v=c6a498bb4bfc176c8fb8bdba6c70d3642fe0ee4e41510c476171d5e70ca49ffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
