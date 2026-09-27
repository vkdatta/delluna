export const name="hourglass_pause";
export const id="dl_8a00450d944884e29750";
export const url=new URL("../icons/hourglass_pause.svg?v=2f1f19edc815c8b94990037a9f83e3dd2fbdce2fa36d72857826f9c2cf71deb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
