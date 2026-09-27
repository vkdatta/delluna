export const name="lucid_2-log-in";
export const id="dl_a4d5a378c19640689165";
export const url=new URL("../icons/lucid_2-log-in.svg?v=1fb138ccdb02c408efc7c8e5a59bf0f336f339011726f37301ad5a543a9c50ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
