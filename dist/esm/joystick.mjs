export const name="joystick";
export const id="dl_3c7da5eb2cae45ab972d";
export const url=new URL("../icons/J/joystick.svg?v=7f495aeebf5f97894e52473c016fc29acfda1b5b1ad1a09861084b652a90bd32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
