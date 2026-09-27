export const name="trackpad_input";
export const id="dl_e34bcd460f43a24b4c01";
export const url=new URL("../icons/trackpad_input.svg?v=0aba61c1f9e30315481ddc24bd5fbdb1f63d825f075099738422313275622649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
