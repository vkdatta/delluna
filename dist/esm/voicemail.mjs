export const name="voicemail";
export const id="dl_7be181ec87394d82ac90";
export const url=new URL("../icons/voicemail.svg?v=23b1662ad68c646db8a2da5871d380f4a2c8308c0942e77e8022800d762802b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
