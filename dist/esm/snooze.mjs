export const name="snooze";
export const id="dl_1c496ea698cc458daa0e";
export const url=new URL("../icons/snooze.svg?v=e031d89583cac2d64cfe57414f6dfc1b4e68c124b97e6aa4875a797a66162e09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
