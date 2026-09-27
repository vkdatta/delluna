export const name="lucid_3-ship-cargo";
export const id="dl_e6bfbdb3fc54453d884f";
export const url=new URL("../icons/lucid_3-ship-cargo.svg?v=f4ab7704b85471347a718da9ec19e59fc9f37543e4997588e742ad14e2b12aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
