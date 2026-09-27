export const name="caret-double-down-duotone";
export const id="dl_05dc62861a274aa7be42";
export const url=new URL("../icons/caret-double-down-duotone.svg?v=3308e43f6ff1d5ed2c29be4b9eceedbdaa7e3be1a284b62bc0b43660bb4eb204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
