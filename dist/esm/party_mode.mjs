export const name="party_mode";
export const id="dl_d45484cefd3520e5f093";
export const url=new URL("../icons/party_mode.svg?v=25d71ff2570ccf25b6740000587fbeae084d093409c29f259508037b1c36cbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
