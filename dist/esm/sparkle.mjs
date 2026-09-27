export const name="sparkle";
export const id="dl_5bc0a7f84f21019866f1";
export const url=new URL("../icons/sparkle.svg?v=e33b731479c4e536b07009abf8bf6178e9bd99301dc0aa2a587c60cffd8037dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
