export const name="piano-keys-thin";
export const id="dl_ad664f9669f442af9b57";
export const url=new URL("../icons/piano-keys-thin.svg?v=fbdbf79dcc9e279a935a0492499b19b2a4642f006bbb02d873942af1e143500e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
