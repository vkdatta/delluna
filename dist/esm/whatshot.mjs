export const name="whatshot";
export const id="dl_380d6e582b0d4d931196";
export const url=new URL("../icons/whatshot.svg?v=167165a21509f113c6f62b5aab601318443d78ddf062d6349a218231a1e71a51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
