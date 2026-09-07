export const name="seatbelt";
export const id="dl_f791dfb6b18348fa9286";
export const url=new URL("../icons/S/seatbelt.svg?v=621ea9c524b8c70ab478cc3a7e4fcf3b39fc27296b486249aa27d97a597d8dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
