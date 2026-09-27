export const name="person-simple-light";
export const id="dl_ad39c367453a4c97ad9d";
export const url=new URL("../icons/person-simple-light.svg?v=0e487fdd3af90f4c29852e94975b63254024f43ae60e8b618db980901eee7ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
