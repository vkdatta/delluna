export const name="fullscreen";
export const id="dl_c936b4b53ad3f62eda19";
export const url=new URL("../icons/fullscreen.svg?v=55bb4a7e454cc51d0633f981c6d9bde0865872e1b8f4546093bbae0b1379b32e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
