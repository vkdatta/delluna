export const name="stacked_email";
export const id="dl_62a3d6c13fc3ea03d655";
export const url=new URL("../icons/stacked_email.svg?v=02458a33a383762cf00aa9adea9fabe909c6de7b4e054dc601840f20129e11d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
