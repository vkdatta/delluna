export const name="piggy-bank";
export const id="dl_5f409c0a601a4a1c82de";
export const url=new URL("../icons/piggy-bank.svg?v=577428e11393fd257c441840a927c619ec149cf6161c7881b2aca21c031ac5d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
