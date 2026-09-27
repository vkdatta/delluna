export const name="computer_arrow_up";
export const id="dl_5f89cc71c1be65c9d2de";
export const url=new URL("../icons/computer_arrow_up.svg?v=a976a58e9d4ba90d0df647309626be582a6460b67279787989a7e389a2957bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
