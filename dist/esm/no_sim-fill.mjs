export const name="no_sim-fill";
export const id="dl_60c7f9716e4482d176ad";
export const url=new URL("../icons/no_sim-fill.svg?v=6d667092007f8c80d669db9426e8d6387d65e93ed6b61bbe6342d576983c52a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
