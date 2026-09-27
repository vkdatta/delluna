export const name="washing-machine-thin";
export const id="dl_8a24394f0eb0d9bb4569";
export const url=new URL("../icons/washing-machine-thin.svg?v=f6432130827c96f6778cf0c95e9666ed1156ed63691420697f3bdad997edbb69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
