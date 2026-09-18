export const name="full_hd";
export const id="dl_f43cc23d752f41aab171";
export const url=new URL("../icons/full_hd.svg?v=f2f3e8df941cabb7bbc4c00fb1637d52e217fe51d01a121fba827dbc1c241404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
