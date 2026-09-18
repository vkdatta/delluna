export const name="lightbulb_2";
export const id="dl_c4fe1f108031449aa785";
export const url=new URL("../icons/lightbulb_2.svg?v=39c342f291fed9598dbd681cc574ea2ca0060ca2c9e223bef67e9d4e4c676854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
