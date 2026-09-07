export const name="lucid_2-droplet-off";
export const id="dl_83fadfeac4b64cb0bf08";
export const url=new URL("../icons/lucid_2-droplet-off.svg?v=e00f4cd3fe31ae148b7d9877c19649fb52b810f2c95dfed0a6b0e2b1d838321e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
