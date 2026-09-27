export const name="lucid_1-bluetooth-off";
export const id="dl_6b923f01672142c8bdc8";
export const url=new URL("../icons/lucid_1-bluetooth-off.svg?v=7ce6328718a25fd198c925eae5be750cb2a5531aa2d939fbc9aa1116c6a8b1f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
