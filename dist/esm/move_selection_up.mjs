export const name="move_selection_up";
export const id="dl_afc0c46dc4a9180c88fd";
export const url=new URL("../icons/move_selection_up.svg?v=ce77a7836a23633c629ff49057b0a506afb6186061c1ab29afdb4a3544a14eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
