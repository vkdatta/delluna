export const name="tilde-thin";
export const id="dl_205969d9341243909222";
export const url=new URL("../icons/T/tilde-thin.svg?v=8258d1d9ce1bde60bd371275f227e6d45b48b7af2f0cf100b84a5f3887eb09a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
