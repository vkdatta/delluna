export const name="facebook-logo-thin";
export const id="dl_f0ac26078e7c4594b636";
export const url=new URL("../icons/facebook-logo-thin.svg?v=4a9d345d6e666244197ee40e008e2cb48c9df397529c640f17fe0c4a7d6c693f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
