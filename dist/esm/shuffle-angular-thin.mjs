export const name="shuffle-angular-thin";
export const id="dl_7dcfe0293b1d4b4b8c3c";
export const url=new URL("../icons/S/shuffle-angular-thin.svg?v=ae1033baf7ae41d847bee000503cd42025954edaeb3af9a3f469dfac082ea7b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
