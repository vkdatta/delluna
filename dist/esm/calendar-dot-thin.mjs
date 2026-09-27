export const name="calendar-dot-thin";
export const id="dl_ccc53fed3dbd4c438b2e";
export const url=new URL("../icons/calendar-dot-thin.svg?v=798c3531e5d1949006808915040dc4820dc63904b235b22e6a63d60b68da6d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
