export const name="notification_audio";
export const id="dl_b4bfba0bafee9441b196";
export const url=new URL("../icons/notification_audio.svg?v=662c6fe44acaed7cc2d408f773ac8545ce15caf994229afe925a70cd123bfaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
