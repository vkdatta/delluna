export const name="notepad";
export const id="dl_a2f83f76fb014596839c";
export const url=new URL("../icons/notepad.svg?v=90c193d1160b3eaf74d5f64b0e3bdef212d88baf59600832a5529adf67a0524f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
