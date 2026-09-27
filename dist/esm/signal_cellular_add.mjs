export const name="signal_cellular_add";
export const id="dl_2e316d83baa8c48b6da2";
export const url=new URL("../icons/signal_cellular_add.svg?v=26ef3c019fffb0d77dc6f36e699c1ed52dddfaf6a88e3cc9893ba9585c28b629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
