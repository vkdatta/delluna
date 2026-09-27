export const name="lucid_2-gamepad-directional";
export const id="dl_e2893e493afb44918a69";
export const url=new URL("../icons/lucid_2-gamepad-directional.svg?v=f9278c1bc0236d21d825463b67ff56fc6d5bcc44073f25129dc17935c4da20c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
