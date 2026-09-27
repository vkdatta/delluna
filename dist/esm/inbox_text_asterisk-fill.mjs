export const name="inbox_text_asterisk-fill";
export const id="dl_a28f345549075ef3e66f";
export const url=new URL("../icons/inbox_text_asterisk-fill.svg?v=49ed85ef1f4b4ad12b21b63c8d86d8387bbedc396ea21c89458d9964f76ea98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
