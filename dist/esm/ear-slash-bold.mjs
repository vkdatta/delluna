export const name="ear-slash-bold";
export const id="dl_bb2138afc0484928bb88";
export const url=new URL("../icons/ear-slash-bold.svg?v=aaacb4fb1bf2c37d6f01eac1d9f07994fd8489d994434e086f6abd27fcdc43a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
