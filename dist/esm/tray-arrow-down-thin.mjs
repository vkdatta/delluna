export const name="tray-arrow-down-thin";
export const id="dl_f52f4147488c629f86d8";
export const url=new URL("../icons/tray-arrow-down-thin.svg?v=e0388c66aa666352889283021423403ba6daca8b48c73ff3e9b954fe8cd32bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
