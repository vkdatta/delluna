export const name="arrow-fat-up-bold";
export const id="dl_8a2b33506c444268b0b7";
export const url=new URL("../icons/arrow-fat-up-bold.svg?v=d6fece86c4ef171cd843ac086e33b15ea4843c5aab187d92f1cedf5726a3febe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
