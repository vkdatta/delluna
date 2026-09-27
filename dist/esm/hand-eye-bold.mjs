export const name="hand-eye-bold";
export const id="dl_40dc456dc16c45de826b";
export const url=new URL("../icons/hand-eye-bold.svg?v=325879e542bfb47f375f870f06d4c2368766b8b0c8efaab8654bc40c2a9cb584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
