export const name="chromecast_device-fill";
export const id="dl_b031b2a634a05d5ba138";
export const url=new URL("../icons/chromecast_device-fill.svg?v=2636f7f2c70550e1afc18568b7bceaef6e2c36e636c203e7090eb176630a480b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
