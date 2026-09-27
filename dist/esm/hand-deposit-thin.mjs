export const name="hand-deposit-thin";
export const id="dl_2a54793c6533452290e1";
export const url=new URL("../icons/hand-deposit-thin.svg?v=24e100bb9a53a160f77184359f67bcd03d394252fda2bf9ab34c10a1077c5000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
