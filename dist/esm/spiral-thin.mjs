export const name="spiral-thin";
export const id="dl_f039953a393d9968dba6";
export const url=new URL("../icons/spiral-thin.svg?v=53ccd12e1a806e22bed7bc80ea7732a167959589e57af751c4a46e982b3e4b89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
