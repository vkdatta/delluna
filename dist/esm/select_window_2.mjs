export const name="select_window_2";
export const id="dl_48c65b08841b70981fd3";
export const url=new URL("../icons/select_window_2.svg?v=4442b9afa465edd6888d395863f36da656f9f140ff88bae1fe1df3835751a8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
