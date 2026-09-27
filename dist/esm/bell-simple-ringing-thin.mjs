export const name="bell-simple-ringing-thin";
export const id="dl_67395d32a2c3445ea5e5";
export const url=new URL("../icons/bell-simple-ringing-thin.svg?v=e97860d4f3fbae5d4cf2d9641010ea20329986db9f9a31febe35be4fb1aa0cd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
