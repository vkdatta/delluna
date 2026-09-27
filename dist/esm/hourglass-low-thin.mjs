export const name="hourglass-low-thin";
export const id="dl_db270f1cbbab4accb01b";
export const url=new URL("../icons/hourglass-low-thin.svg?v=983e036a6ced92edac5f904efe02e052dbd2a0e760d6233ac0a6de370f65fd7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
