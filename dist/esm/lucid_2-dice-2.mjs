export const name="lucid_2-dice-2";
export const id="dl_c2b9a726304447db8068";
export const url=new URL("../icons/lucid_2-dice-2.svg?v=9b0059a0fb03d18a5bc9c440422115844be132527d55fcacb5ede0eaeba86930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
