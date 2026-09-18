export const name="sign_language_off";
export const id="dl_c8e9ed68b96b45478032";
export const url=new URL("../icons/sign_language_off.svg?v=03c57e7ae058a449bcc596e09b491c47dedd7bbe848f3bd2cbd9703b3efd6a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
