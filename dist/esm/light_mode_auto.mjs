export const name="light_mode_auto";
export const id="dl_1d6dcc07a0ba002397ad";
export const url=new URL("../icons/light_mode_auto.svg?v=3ee0e1b27f851d7e25c4548c977a9653f9f609831538360cf792a3199d992dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
