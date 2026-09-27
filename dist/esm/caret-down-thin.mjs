export const name="caret-down-thin";
export const id="dl_6ca02020c0704f5596c2";
export const url=new URL("../icons/caret-down-thin.svg?v=88e8ba4833f0ec67cc1b93b1334c112b30e1638ce5ed03fb63741eab736316be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
