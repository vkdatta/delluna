export const name="computer_sound";
export const id="dl_93d01b220017a6ccf25b";
export const url=new URL("../icons/computer_sound.svg?v=380b21930b754f69be36b26f27dad2959546c5b37781c2100c56c7337cbf8ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
