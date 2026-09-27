export const name="computer_sound-fill";
export const id="dl_5173a6f3a63221a2c3cf";
export const url=new URL("../icons/computer_sound-fill.svg?v=ff0ec6e3996e8abdce2c59ea792b8625a613e8235b5f9dbfee161ef6ac54c605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
