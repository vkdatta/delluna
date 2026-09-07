export const name="washing-machine-thin";
export const id="dl_fd40f91d41624d5d866b";
export const url=new URL("../icons/W/washing-machine-thin.svg?v=d1a8b2d37c465edfa47c31968e70c91eb9f80958a294cb728ac9c66a323ce6e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
