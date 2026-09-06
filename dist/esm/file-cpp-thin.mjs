export const name="file-cpp-thin";
export const id="dl_2ee5a9219526438e952e";
export const url=new URL("../icons/file-cpp-thin.svg?v=a229cf016c587a82c5acfdbb139f71e3517abd5e9eaa14a250911d5020d755cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
