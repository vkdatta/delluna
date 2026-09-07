export const name="lucid_1-circle-plus";
export const id="dl_2b21c5c0b0034b9dae81";
export const url=new URL("../icons/lucid_1-circle-plus.svg?v=469a2610ae68da5b90d89c334e9134257112ccd0f4c544f1b5842563e6fcef74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
