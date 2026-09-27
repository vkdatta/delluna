export const name="seatbelt-fill";
export const id="dl_f43e6a712f7dcd81f6e4";
export const url=new URL("../icons/seatbelt-fill.svg?v=9c79d07ca48629928e9b76fea3784eb00cece3007ca7f4077958371f5462f25a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
