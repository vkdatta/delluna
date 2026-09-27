export const name="stop_screen_share";
export const id="dl_0a4a6854c44e55769656";
export const url=new URL("../icons/stop_screen_share.svg?v=efdff584817360667573781bba70c15b49fea5cdfc366ce42b22d83ebdcb279f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
